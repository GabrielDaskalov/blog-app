import React, {useContext, useState} from 'react';
import './Login.css'
import {useHistory} from 'react-router-dom'
import UserContext from '../../../context/userContext'
import Axios from 'axios';
import ErrorNotice from '../../../misc/ErrorNotice';
import {setCookie} from '../../../helpers/cookies'

const Login=()=>
{
    const {userData, setUserData} = useContext(UserContext);

    const[username, setUsername] = useState();
    const[password, setPassword]= useState();
    const[error, setError]=useState();

    
    const history=useHistory();

    const submit= async (e)=>
    {
        try{
            e.preventDefault();

            const loginUser={username, password};

            const loginRes= await Axios.post("http://localhost:5000/users/login", loginUser)

            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            })

            localStorage.setItem("auth-token", loginRes.data.token)
            setCookie("auth-token", loginRes.data.token)

            history.push("/home")
            }
        catch(err)
            {
                err.response.data.msg && setError(err.response.data.msg)

            }

    }

        return (
            <div className="loginBody">
                <h2>Login</h2>
                {error && <ErrorNotice message={error} clearError={()=>setError(undefined)}/>}
                <form className="form" onSubmit={submit}>
                    <div className="imgContainer">
                        <img src= "login-icon.png" alt="No image" className="imgBody"/>
                    </div>
                    <label className="label">Username: </label>
                    <input
                    type="text"
                    className="usrField"
                    onChange={(e)=>setUsername(e.target.value)}
                    ></input>
                    <br/>
                    <label className="label">Password: </label>
                    <input
                    type="password"
                    className="pswField"
                    onChange={(e)=>setPassword(e.target.value)}
                    ></input>
                    <br/>
                <input type="submit" value="Login" className="loginBtn"/>
                </form>
            </div>
        );
    }


export default Login;