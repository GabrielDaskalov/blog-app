import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className="about-bigBody">
                <div className="about-section">
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Resize the browser window to see that this page is responsive by the way.</p>
                </div>
                <h2 className="team-title">Our Team</h2>
                <div className="row">
                    <div className="column">
                        <div className="card-1">
                            <img src="boy-about.png" alt="Gabriel" className="img-1"/>
                            <div className="container">
                                <h2>Gabriel D</h2>
                                <p className="title-1">CEO & Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card-2">
                            <img src="amigo-about.png" alt="Lazar" className="img-2"/>
                            <div className="container">
                                <h2>Lazar S</h2>
                                <p className="title-2">IT Manager</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="column">
                        <div className="card-3">
                            <img src="girl-about.png" alt="Angelinka" className="img-3"/>
                            <div className="container">
                                <h2>Angelinka</h2>
                                <p className="title-3">Web Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div> */}
                </div>          

            </div>
            
        )
    }
}

export default About;