import React from 'react';
import './PrivateHome.css'
import {Link} from 'react-router-dom'

function PrivateHome(props) {
    return (
        <div className="private-home-body">
            <div className="head-body">
                <h1 className="head-greet">Welcome to your Home Page</h1>
            </div>
            <div className="post-container">
                <div className="post-left-content">
                </div>
                <div className="post-right-content">
                    <p className="post-right-par"> You want to write your post already?</p>
                    <Link to= "/post" className="post-right-btn">Post</Link>        
                </div>
            </div>
            <div className="categories-container">
                <div className="categories-left-content">
                    <p className="categories-left-par-1">You want to find your favourite subjects?</p>
                    <p className="categories-left-par-2">Check our categories</p>
                    <Link to="/categories" className="categories-left-btn">Categories</Link>
                </div>
                <div className="categories-right-content">
                    
                </div>
            </div>
            <div className="search-container">
                <div className="search-left-content">
                    
                </div>
                <div className="search-right-content">
                    <p className="search-right-par">You are looking for a certain post, category or user?</p>
                    <Link to="/search" className="search-right-btn">Find it here</Link>
                </div>
            </div>

            <div className="account-container">
                <div className="account-left-content">
                    <p className="account-left-par">You want to check your account information?</p>
                    <Link to="/account"className="account-left-btn">View details</Link>
                </div>
                <div className="account-right-content">

                </div>
            </div>
        </div>
    );
}

export default PrivateHome;