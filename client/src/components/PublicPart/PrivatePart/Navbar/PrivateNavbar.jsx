import React from 'react';
import {Link} from 'react-router-dom'
import './PrivateNavbar.css'

function Navbar(props) {
    return (
        <div className="nav">
            <Link to = "/post">Post</Link>
            <Link to = "/categories">Categories</Link>
            <Link to = "/search">Search</Link>
            <Link to = "/account">Account</Link>
            <Link to = "/logout">Logout</Link>            
        </div>
    );
}

export default Navbar;