import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'

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
        <div className="card">
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h3>Age: {user.age}</h3>
            <h3>Town: {user.town}</h3>
            <h3>Country: {user.country}</h3>
            <button onClick={(e)=>showUserPosts(user.posts)}>Show posts</button>
        </div>
    );
}

export default AccountCard;