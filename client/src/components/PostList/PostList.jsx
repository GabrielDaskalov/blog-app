import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {


    constructor()
    {
        super()

        this.state=
        {
            posts: []
        }
    }

    componentDidMount(){
        this.getPosts();
    }

    async getPosts()
    {
        const res= await axios.get("http://localhost:5000/posts/posts");
        console.log(res.data)
        this.setState({posts: res.data})

    }

    renderList()
    {
        return this.state.posts.map((post, id)=>{
        return (
        <div>
        <div key={id}>
            <h3>{post.title}</h3>
            <span>{post.createdAt}</span>
            {/* <h3>{post.tags}</h3> */}
        </div>
        </div>
        )})
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

export default PostList;