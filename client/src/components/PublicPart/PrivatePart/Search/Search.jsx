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
        <div>
        <h1>Posts founded: </h1>
        {postsToShow.map((post, id)=>
        <ul key={id}>
            <h2>{post.title}</h2>
            <button onClick={(e)=>showPost(post)}>Show post</button>
        </ul>
        )}
        <p>
        <button onClick={(e)=>hide("Posts")}>Hide</button>
        </p>
        </div>
        : <div>
        {/* <p>There are no posts with this name</p> */}
        </div>

        const categoriesAfterSearch= showContentCategories?
        <div>
            <h1>Categories founded: </h1>
            {
                categoriesToShow.map((category, id)=>
                <ul key={id}>
                    <h2>{category.name}</h2>
                    <button onClick={(e)=>showCategoryPosts(category.name)}>Show posts</button>
                </ul>
                )
            }
            <p>
             <button onClick={(e)=>hide("Categories")}>Hide</button>
            </p>
        </div>:<div></div>

        const usersAfterSearch=showContentUsers?
        <div>
            <h1>Users founded: </h1>
            {
                usersToShow.map((user,id)=>
                <ul key={id}>
                    <h2>Username: {user.username}</h2>
                    <h2>Email: {user.email}</h2>
                    <button onClick={(e)=>showDetails(user)}>Details</button>
                </ul>
                )
            }
             <p>
             <button onClick={(e)=>hide("Users")}>Hide</button>
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