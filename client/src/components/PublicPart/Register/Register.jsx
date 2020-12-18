import React, { useState, useContext } from 'react';
import './Register.css'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import userContext from '../../../context/userContext';
import ErrorNotice from '../../../misc/ErrorNotice';
import { setCookie } from '../../../helpers/cookies';

const Register=()=>
{
    const history=useHistory();

    const[email, setEmail]=useState();
    const[username, setUsername]=useState();
    const[password, setPassword]=useState();
    const[passwordCheck, setPasswordCheck]=useState();
    const[age, setAge]=useState();
    const[town, setTown]=useState();
    const[country, setCountry]=useState();
    let[error, setError]=useState();

    const {setUserData}=useContext(userContext)

    const submit=async (e)=>
    {
        try
        {
            e.preventDefault();
            const newUser=
            {
                email,
                username,
                password,
                passwordCheck,
                age,
                town,
                country,
                //define role
                //role
            }

            await axios.post
            (
                "http://localhost:5000/users/register",
                newUser
            )

            const loginResponse= await axios.post
            (
                "http://localhost:5000/users/login",
                {username, password}

            )
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            })

            localStorage.setItem("auth-token", loginResponse.data.token)
            setCookie("auth-token", loginResponse.data.token)

            history.push("/home")
        }
        catch(err)
        {
            err.response.data.msg && setError(err.response.data.msg)
            console.log(error)
        }

    }

   
    let output=
    <form onSubmit={submit} className="registerForm">
        <label>E-mail address: </label>
        <input
            type="text"
            required
            onChange={(e)=>setEmail(e.target.value)}
            className="regEmailField"
        /><br/>
        <label>Username: </label>
        <input 
            type="text"
            required
            onChange={(e)=>setUsername(e.target.value)}
            className="regUsrField"
        /><br/>
        <label>Password: </label>
        <input
            type="password"
            required
            onChange={(e)=>setPassword(e.target.value)}
            className="regPswField"
        /><br/>
        <label>Confirm password: </label>
        <input
            type="password"
            required
            onChange={(e)=>setPasswordCheck(e.target.value)}
            className="cnfmPswField"
        /><br/>
        <label>Age: </label>
        <input
            type="number"
            onChange={(e)=>setAge(e.target.value)}
            className="regAgeField"
        /><br/>
        <label>Birth place (town): </label>
        <input
            type="text"
            onChange={(e)=>setTown(e.target.value)}
            className="regTownField"
        /><br/>
        <label>Birth place (country): </label>
        <input
            type="text"
            onChange={(e)=>setCountry(e.target.value)}
            className="regCountryField"
        /><br/>
        <input type="submit" value="Register" className="regBtn"/>
    </form>

        return (
            <div className="registerBody">
                <h2>Register</h2>
                {error && <ErrorNotice message={error} clearError={()=>setError(undefined)}/>}
                {output}
            </div>
        );
    }


export default Register;