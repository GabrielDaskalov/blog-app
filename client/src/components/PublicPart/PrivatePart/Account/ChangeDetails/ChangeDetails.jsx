import React, {useState, useContext} from 'react';
import UserContext from '../../../../../context/userContext';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './ChangeDetails.css'


function ChangeDetails(props) {

    const history=useHistory();
    const {userData, setUserData}=useContext(UserContext)

    const [newUsername, changeUsername]=useState();
    const [newEmail, changeEmail]=useState();
    const [newAge, changeAge]=useState();
    const [newTown, changeTown]=useState();
    const [newCountry, changeCountry]=useState();



    const submit= async(e)=>
    {
        try
        {
            e.preventDefault();

            let changes =
            {
                username: newUsername === userData.user.username || newUsername === undefined ? userData.user.username : newUsername,
                email: newEmail === userData.user.email || newEmail === undefined ? userData.user.email : newEmail,
                age: newAge === userData.user.age || newAge === undefined ? userData.user.age : newAge,
                town: newTown === userData.user.town || newTown === undefined ? userData.user.town : newTown,
                country: newCountry === userData.user.country || newCountry === undefined ? userData.user.country : newCountry
            } 

            console.log(`changes: ` ,changes)



            //get user

           const token = userData.token;

            const responseData = await axios.get("http://localhost:5000/users/", {headers: {"x-auth-token": token}})

            const user= responseData.data;

            console.log(`checked user: `,user)

            const updates = await axios.post("http://localhost:5000/users/update",
            {
                headers:
                {
                    "x-auth-token": token,
                    "new-updates": changes
                }
            })
            .then(res=> console.log(`aubb:` ,res.data))
            .catch(err=> console.log(`error: `, err))

            setUserData({
                token: token,
                user:
                {
                    id: userData.user.id,
                    username: changes.username,
                    email: changes.email,
                    age: changes.age,
                    town: changes.town,
                    country: changes.country

                }
            })


            history.push('/account');

        }
        catch(err)
        {
            console.log(err)
        }

        history.push('/account');

    }

    return (
        <div className="bodyChangeDetails">
            <form className="form" onSubmit={submit}>
                <label>Change username: </label>
                <input type="text" className="change-details-field-usr" onChange={(e)=>changeUsername(e.target.value)}/>
                <br/>
                <label>Change age: </label>
                <input type="number" className="change-details-field-age" onChange={(e)=>changeAge(e.target.value)}/>
                <br/>
                <label>Change town: </label>
                <input type="text" className="change-details-field-town" onChange={(e)=>changeTown(e.target.value)}/>
                <br/>
                <label>Change country: </label>
                <input type="text" className="change-details-field-country" onChange={(e)=>changeCountry(e.target.value)}/>
                <br/>
                <label>Change email: </label>
                <input type="text" className="change-details-field-email" onChange={(e)=>changeEmail(e.target.value)}/>
                <br/>
                <input type="submit" value="save" className="change-details-btn"/>
            </form>
        </div>
    );
}

export default ChangeDetails;