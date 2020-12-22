import React from 'react';
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'


function Footer(props) {
    return (
        <div className="footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="container-icons">
            <nav className="nav-icons">
            <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
            <a href="https://www.linkedin.com/" class="fa fa-linkedin"></a>
            <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                {/* <FaFacebook className="fb-icon"/>
                <FaInstagram className="ins-icon"/>
                <FaLinkedin className="link-icon"/> */}
            </nav>

            </div>
           

        </div>
    );
}

export default Footer;