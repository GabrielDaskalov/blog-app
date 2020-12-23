import React, { useState } from 'react';
import './Search.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Search =()=> {

    const history=useHistory()

    let[showContentPosts, setShowContentPosts]=useState(false)
    let[showContentCategories, setShowContentCategories]=useState(false)
    let[showContentUsers, setShowContentUsers]=useState(false)
    let [input, setInput]=useState("")
    let [postsToShow, setPosts]=useState([])
    let [categoriesToShow, setCategories]=useState([])
    let [usersToShow, setUsers]=useState([])

    const hide=(contentToHide)=>
    {

        switch(contentToHide)
        {
            case "Posts": setShowContentPosts(false); break;
            case "Categories": setShowContentCategories(false); break;
            case "Users": setShowContentUsers(false); break;
            default: return;

        }

    }

    const showPost=(post)=>
    {

        history.push({
            pathname: '/showCurrentPost',
            state: {post: post}
        })

    }

    const showCategoryPosts=(categoryName)=>
    {
        console.log("search:" ,categoryName)

        history.push({
            pathname: '/showCategoryPosts',
            state: {value: categoryName}
        })

    }

    const showDetails=(user)=>
    {
        console.log("user in search: " ,user)

        history.push({
            pathname: '/accountCard',
            state: {user: user}
        })

    }

    const changeInput=(e)=>
    {
        e.preventDefault()

        let newInput = e.target.value;

        setInput(newInput)

    }

    const search= async (e)=>
    {
        e.preventDefault()

        await axios.get("http://localhost:5000/posts/",
        {params: {input: input}})
        .then(res=> setPosts(res.data))
        .catch(err=>console.log(err))

        console.log(postsToShow)

        setShowContentPosts(true)

        await axios.get("http://localhost:5000/categories/",
        {params: {input: input}})
        .then(res=>setCategories(res.data))
        .catch(err=>console.log(err))
        
        setShowContentCategories(true)

        await axios.get("http://localhost:5000/users/find",
        {params: {input: input}})
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))

        console.log(usersToShow)

        setShowContentUsers(true)
    }

        console.log(showContentPosts)
        const postsAfterSearch= showContentPosts?
        <div className="posts-after-search">
        <h1 className="posts-founded">Posts founded: </h1>
        {postsToShow.map((post, id)=>
        <ul key={id}>
            <h2 className="search-component-post-title">{post.title}</h2>
            <button className="search-component-show-post" onClick={(e)=>showPost(post)}>Show post</button>
        </ul>
        )}
        <p>
        <button className="search-component-hide-btn" onClick={(e)=>hide("Posts")}>Hide</button>
        </p>
        </div>
        : <div className="empty-posts">
            
        </div>

        const categoriesAfterSearch= showContentCategories?
        <div className="categories-after-search">
            <h1 className="categories-founded">Categories founded: </h1>
            {
                categoriesToShow.map((category, id)=>
                <ul key={id}>
                    <h2 className="search-component-category-name">{category.name}</h2>
                    <button className="search-component-show-posts" onClick={(e)=>showCategoryPosts(category.name)}>Show posts</button>
                </ul>
                )
            }
            <p>
             <button className="search-component-hide-btn" onClick={(e)=>hide("Categories")}>Hide</button>
            </p>
        </div>:<div></div>

        const usersAfterSearch=showContentUsers?
        <div className="users-after-search">
            <h1 className="users-founded">Users founded: </h1>
            {
                usersToShow.map((user,id)=>
                <ul key={id}>
                    <h2 className="search-component-usr">Username: {user.username}</h2>
                    <h2 className="search-component-email">Email: {user.email}</h2>
                    <button className="search-component-users-details" onClick={(e)=>showDetails(user)}>Details</button>
                </ul>
                )
            }
             <p className="search-component-par-hide">
             <button className="search-component-hide-btn" onClick={(e)=>hide("Users")}>Hide</button>
            </p>
        </div>:<div></div>

        return (
            <div className="search-component-container">
            <div className="search-img"/>
             <div className="search" onSubmit={search}>
                <form className="search-component-form">
                    <h1 className="search-title">Search: </h1>
                    <input type="text" className="search-field" onChange={changeInput}/>
                    <input type="submit" value="Search" className="search-component-btn"/>
                </form>
                {postsAfterSearch}
                {categoriesAfterSearch}
                {usersAfterSearch}
             </div>
            </div>
         
        );
    }


export default Search;