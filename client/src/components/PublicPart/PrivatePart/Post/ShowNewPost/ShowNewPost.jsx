import React from 'react';

const ShowNewPost = (props) => {

    const newPost = props.location.state.post;

    return (
        <div>
            <h1>{newPost.title}</h1>
            <h2>{newPost.content}</h2>
            <h2>Category: {newPost.category}</h2>
            <h2>Posted by: {newPost.author}</h2>
            <h3>Created at: {newPost.createdAt}</h3>
        </div>
    );
};

export default ShowNewPost;