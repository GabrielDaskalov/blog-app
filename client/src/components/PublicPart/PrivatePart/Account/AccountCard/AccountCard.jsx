import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import './AccountCard.css'

function AccountCard(props) {

    const history=useHistory()

    let [user]=useState(props.location.state.user)

    const showUserPosts=(posts)=>
    {
        console.log("account card posts: " ,posts)

        history.push({
            pathname: '/showUserPosts',
            state: {userPosts: posts}
        })

    }

    return (
        <div className="account-card-container">
            <div className="account-card">
                <h2 className="account-card-usr">Username: <b className="acc-card-b-usr">{user.username}</b></h2>
                <h2 className="account-card-email">Email: <b className="acc-card-b-email">{user.email}</b></h2>
                <h3 className="account-card-age">Age: <b className="acc-card-b-age">{user.age}</b></h3>
                <h3 className="account-card-town">Town: <b className="acc-card-b-town">{user.town}</b></h3>
                <h3 className="account-card-country">Country: <b className="acc-card-b-country">{user.country}</b></h3>
                <button className="account-card-btn-show" onClick={(e)=>showUserPosts(user.posts)}>Show posts</button>
            </div>
        </div>
       
    );
}

export default AccountCard;