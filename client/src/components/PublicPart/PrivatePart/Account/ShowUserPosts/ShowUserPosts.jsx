import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import './ShowUserPosts.css'

const ShowUserPosts=(props) =>{

    const history = useHistory()

    let [userPosts]=useState(props.location.state.userPosts)

    const showPost=(post)=>
    {
        console.log("show user posts post" ,post)

        history.push({
            pathname: "/showCurrentPost",
            state: {post: post}
        })
        
    }

    const outputUserPosts= userPosts.length > 0 ?
    <div className="show-user-posts-comp">
        {
            userPosts.map((userPost, id)=>
            <div className="show-user-posts-comp-post">
                <ul key={id}>
                    <h2 className="show-users-posts-comp-title">{userPost.title}</h2>
                    <h2 className="show-users-posts-comp-date">{userPost.createdAt}</h2>
                    <button className="show-users-posts-comp-btn" onClick={(e)=>showPost(userPost)}>Show post</button>
                </ul>
            </div>
            )
        }
    </div>
    :
    <div>No posts</div>

    return (
        <div>
            {outputUserPosts}
        </div>
    );
};

export default ShowUserPosts;