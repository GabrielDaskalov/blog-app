import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Layout from './components/PublicPart/Layout.jsx'
import UserContext from './context/userContext'


function App() {

  const history=useHistory();

  const [userData, setUserData]=useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {


    // history.push("/home")
    const checkLoggedIn=async ()=>
    {
      let token= localStorage.getItem("auth-token");
      if(token===null)
      {
        localStorage.setItem("auth-token", "");
        token= "";
      }

      const tokenRes = await axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        {headers: {"x-auth-token": token}})

        console.log(tokenRes.data)

        if(tokenRes.data)
        {
          console.log(`userData.user: ${userData.user}`)
          console.log(`userData.token: ${userData.token}`)

          const userRes= await axios.get(
            "http://localhost:5000/users/",
            {headers: {"x-auth-token": token}})

            console.log(`userRes: ${userRes}`)

            setUserData({
              token,
              user: userRes.data,
            })
        }
    }
    checkLoggedIn()


    if(localStorage.getItem("auth-token") !== "")
    {
      console.log("token logged:" ,localStorage.token)

      history.push("/privateHome")
    }
    else
    {
      console.log("token not logged" ,localStorage.token)

      history.push("/home")

    }
    
  }, [])

  return (
    <UserContext.Provider value={{userData, setUserData}}>
           <Layout></Layout>
    </UserContext.Provider>
  );
}

export default App;
