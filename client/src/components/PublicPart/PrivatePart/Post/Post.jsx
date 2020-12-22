import React, { Component } from 'react';
import axios from 'axios'
import UserContext from '../../../../context/userContext'
import {Link} from 'react-router-dom'
import './Post.css'
import ShowNewPost from './ShowNewPost/ShowNewPost';
 

class Post extends Component {

    static contextType=UserContext;

    constructor()
    {
        super()

        this.state=
        {
            title: "",
            content: "",
            category: "",
            postSuccessfull: false,
            post: null
        }
    }

    inputTitle=(e)=>
    {
        e.preventDefault();
        let newTitle= e.target.value;

        this.setState({title: newTitle})        

    }

    inputContent=(e)=>
    {
        e.preventDefault();
        let newContent=e.target.value;

        this.setState({content: newContent})
    }

    inputCategory=(e)=>
    {
        e.preventDefault();
        let newCategory=e.target.value;

        this.setState({category: newCategory})

    }

    submitPost= async(e)=>
    {
        e.preventDefault();

        let category = this.state.category;
        let title= this.state.title;
        let content=this.state.content;

        let categoryId;
        let userId = this.context.userData.user.id;
        let author = this.context.userData.user.username;
        let createdAt = new Date().toISOString().slice(0, 10);
        let comments= [];

        await axios.get("http://localhost:5000/categories/findByName",
        { params: {name: category}}
        )
        .then(res=>categoryId=res.data)
        .catch(err=>console.log(err));

        console.log(`id of category: `,categoryId);
        console.log(`user id: ` ,userId);
        console.log(`author: ` ,author)
        console.log(`created at: ` ,createdAt)

        const newPost= ({
            category,
            categoryId,
            userId,
            title,
            content,
            author,
            createdAt,
            comments
        })

        axios.post("http://localhost:5000/posts/new", newPost)
        .then(res=> console.log(res))
        .catch(err=>console.log(err))

        this.setState({post: newPost})
        this.setState({postSuccessfull: true})

        console.log(this.state.post)

    }   

    

     render() {

        const output = !this.state.postSuccessfull?
        <div className="post-body">
                <form onSubmit={this.submitPost} className="create-post-body">
                    <h1 className="create-post-title"> Create a post:</h1>
                    <label className="create-post-title">Type title: </label>
                    <input type="text" onChange={this.inputTitle} className="create-post-title-input" required/>
                    <br/>
                    <label className="create-post-content">Type content: </label>
                    <input type="text" onChange={this.inputContent} className="create-post-content-input" required/>
                    <br/>
                    <label htmlFor="categories"className="create-post-categories">Choose a category:</label>
                    <select name="categories" id="categories" onChange={this.inputCategory} className="create-post-categories-input">
                        <option value="Finance">Finance</option>
                        <option value="Sport">Sport</option>
                        <option value="Health">Health</option>
                        <option value="History">History</option>
                        <option value="Science">Science</option>
                        <option value="Politics">Politics</option>
                        <option value="Tourism">Tourism</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/>
                    <input type="submit" value="Submit post" className="create-post-btn"/>
                </form>        
        </div>
        :
        <ShowNewPost value={this.state.post}></ShowNewPost>
        return (
            <div>
                {output}   
            </div>
        );
    }
}

export default Post;