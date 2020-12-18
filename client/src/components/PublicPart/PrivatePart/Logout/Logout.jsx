import React, {useContext, useState} from 'react';
import UserContext from '../../../../context/userContext'
import {useHistory} from 'react-router-dom'
import { deleteCookie } from '../../../../helpers/cookies';


const Logout = () => {

    const history=useHistory();

    const {userData, setUserData}=useContext(UserContext)
    const[successLogout, setSuccessLogout]=useState();


    const logout=()=>
    {
        setUserData({
            token: undefined,
            user: undefined
        })

        console.log(userData)

        localStorage.setItem("auth-token", "")
        deleteCookie("auth-token")

        setSuccessLogout(true)
        history.push("/home")

    }


    // const output=successLogout ?
    // <div>You are logged out</div>
    // :
    const output=
    <button onClick={logout}>
    Logout
    </button>


    return (  
        <div>
            {output}
        </div>
    );
};

export default Logout;