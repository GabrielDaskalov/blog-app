import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    // let showContent=<div>AUBBBBBB</div>;
   
    

    return (
        <div>
        <nav className="nav">
            <Link to = "/home">Home</Link>
            <Link to = "/news">News</Link>
            <Link to = "/about">About</Link>
            <Link to = "/register">Register</Link>
            <Link to = "/login">Login</Link>            
        </nav>
        {/* {showContent} */}
        </div>
    );
}

export default Navbar;