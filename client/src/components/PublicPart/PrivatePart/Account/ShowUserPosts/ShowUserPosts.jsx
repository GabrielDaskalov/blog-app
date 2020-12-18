import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'

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
    <div>
        {
            userPosts.map((userPost, id)=>
            <ul key={id}>
                <h2>{userPost.title}</h2>
                <h2>{userPost.createdAt}</h2>
                <button onClick={(e)=>showPost(userPost)}>Show post</button>
            </ul>
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