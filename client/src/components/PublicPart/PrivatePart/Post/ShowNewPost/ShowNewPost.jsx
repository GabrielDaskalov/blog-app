import React from 'react';
import './ShowNewPost.css'

const ShowNewPost = (props) => {

    const newPost = props.value;

    return (
        <div className="new-post-container">
            <div className="new-post-body">
                <h1 className="new-post-title">{newPost.title}</h1>
                <h2 className="new-post-content">{newPost.content}</h2>
                <h2 className="new-post-category">Category: {newPost.category}</h2>
                <h2 className="new-post-author">Posted by: {newPost.author}</h2>
                <h3 className="new-post-date">Created at: {newPost.createdAt}</h3>
            </div>
        </div>
      
    );
};

export default ShowNewPost;