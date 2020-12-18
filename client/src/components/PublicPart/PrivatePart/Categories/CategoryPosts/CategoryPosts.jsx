import React, { useEffect, useState} from 'react';
import axios from 'axios'
import CurrentPost from './CurrentPost';
import './CategoryPosts.css'

const CategoryPosts =(props)=>{

    let[category, setCategory]=useState()
//    console.log("Setting posts")
    const[posts, setPosts]=useState([])

    // console.log("Posts: " ,posts)

    // console.log("Setting counts")
    let[count, setCount]=useState(0)

    // console.log("Count: ",count)

    // console.log("Setting condition")
    const[showContent, setShowContent]=useState(true)

    useEffect(() => {

        //check if the props has location- if not it is from component A, else component B
        
        console.log("location:" ,props.location)

        let categoryName=props.location? props.location.state.value: props.value;

        console.log("test" ,categoryName)

        // console.log("category posts props: ",props)

        // console.log("Category posts name of category" ,props.value)

        axios.get("http://localhost:5000/posts/findAllByCategory",
        {params: {name: categoryName}})
        .then(res=>{
            setShowContent(false);
            if(res.data){
            setPosts(res.data)}
        })
        .catch(err=>{
            console.log(err);
            setShowContent(false)
        }
        )

        setCategory(categoryName)

        // console.log(showContent)
        
        // console.log(posts);
        // console.log("Use effect ready 1")
    }, [count])

    // console.log("Use effect ready 2")

    if(count < 1)
    {
        setCount(count+1)
    }

    // console.log("Update of count: " ,count)

    // console.log("Output time")
    // console.log(showContent)
    // console.log("Type of posts: " , typeof(posts))

    const showPosts =showContent?
        <div>Zarejdame</div>
        :
        posts &&
        posts.length > 0 &&
        ( posts.map((post, id)=>
            <ul key={id} className="currentPost">
                <CurrentPost post={post} categoryName={category}/>
            </ul>
        ))

    const output= posts.length === 0? <div>There are no posts in this category!</div> : showPosts;

    return (
        <div>
            {output}     
        </div>
    );
};

export default CategoryPosts;