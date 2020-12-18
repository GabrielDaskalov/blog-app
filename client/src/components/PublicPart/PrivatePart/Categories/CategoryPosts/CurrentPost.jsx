import React from 'react';
import './CurrentPost.css'
import {useHistory} from 'react-router-dom'

const CurrentPost=(props)=>{

    const history=useHistory();

    const showCurrentPost=()=>
    {
        console.log("categoryName in current post" ,props.categoryName)

        let categoryName = props.categoryName;
        history.push({
            pathname: '/showCurrentPost',
            state: {post: props.post ,categoryName: categoryName}
        })
    }


    return (
        <div className="post">
            <h3 className="title">{props.post.title}</h3>
            <h3 className="author">{props.post.author}</h3>
            <button className="button" onClick={showCurrentPost}>Show</button>
        </div>
    );
};

export default CurrentPost;