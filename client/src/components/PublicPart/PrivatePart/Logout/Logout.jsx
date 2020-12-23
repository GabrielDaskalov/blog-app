import React, {useContext, useState} from 'react';
import UserContext from '../../../../context/userContext'
import {useHistory} from 'react-router-dom'
import { deleteCookie } from '../../../../helpers/cookies';
import './Logout.css'

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
    <button className="logout-btn" onClick={logout}>
    Logout
    </button>


    return (  
        <div className="logout-container">
         <div className="logout-page">
            <h1 className="logout-question">Do you wish to logout of your page?</h1>
            <h1 className="logout-h">If you are sure, please click the button bellow.</h1>
            {output}
         </div>
        </div>
      
    );
};

export default Logout;