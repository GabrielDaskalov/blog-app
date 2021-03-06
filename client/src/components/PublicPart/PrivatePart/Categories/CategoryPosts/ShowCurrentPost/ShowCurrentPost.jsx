import React, { Component } from 'react';
import UserContext from '../../../../../../context/userContext';
import axios from 'axios'
import './ShowCurrentPost.css'


class ShowCurrentPost extends Component {

    static contextType=UserContext;

    constructor(props)
    {
        super(props)

        console.log(props.location.state.post)

        this.state=
        {
            currentPost: "",
            comment: "",
            comments: []
        }
    }


    componentDidMount()
    {
        const post=this.props.location.state.post;

        this.setState({currentPost: post})

        console.log("cdm current post" ,this.state.currentPost)
        console.log("cdm post" ,post)

        const comments=post.comments;
        console.log("component did mount comments" ,comments)

        this.setState({comments: comments})
        console.log("component did mount state comments" ,this.state.comments)

    }

    addComment=(e)=>
    {
        let newComment = e.target.value;

        this.setState({comment: newComment})
    }

    postComment=(e)=>
    {
        e.preventDefault()

        console.log("props" ,this.props)

        const comment = this.state.comment;
        console.log("comment fronend" ,comment)
        const username=this.context.userData.user.username;
        console.log("username frontend" ,username)
        const category=this.props.location.state.categoryName;
        console.log("category frontend" ,category)
        const title=this.state.currentPost.title;
        console.log("title frontend" ,title)

      //  this.setState({comment: newComment})

        const commentRequest=({
            comment,
            username,
            category,
            title
        })

        console.log(commentRequest)

        axios.post("http://localhost:5000/comments/newComment", commentRequest)
        .then(res=>console.log(res))
        .catch(err => console.log(err))

        this.setState({
            
            comments: [...this.state.comments, comment]
            
        }, console.log("aubbbb" ,this.state.comments))

        // this.setState({comment: ""})
    }

    
    render() {

        // console.log("state: " ,this.state.currentPost)
        // console.log("typeof state: " ,this.state.currentPost)

        const comments = this.state.comments? this.state.comments : []
        console.log("comments:" ,comments)
        console.log("length" ,comments.length)

        console.log("Typeof comments: " ,typeof(comments))

        const outputComments= comments.length > 0?
        comments.map((comment, id)=>
        <ul key={id}>{comment}</ul>
        )
        :
        <div>No comments</div>


        return (
            <div className="show-current-post-container">
             <div className="show-current-post-body">
                <h1>{this.state.currentPost.title}</h1>
                <p className="show-current-post-content">{this.state.currentPost.content}</p>
                <h1>Comments: </h1>
                <div className="output-comments">
                {outputComments}
                </div>
                <form className="commentForm" onSubmit={this.postComment}>
                    <input type="text" className="show-current-comment-field" onChange={this.addComment}/>
                    <input type="submit" value="Comment" className="button-comment"/>
                </form>
             </div>
            </div>
        
        );
    }
}

export default ShowCurrentPost;