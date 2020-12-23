import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className="main">

            <div className="item">
                <div className="img-fill">
                    <div className="text-content">
                                <p className="par-1">
                                    You want to drink your coffee or eat your breakfast reading the most interesting posts and news from other people?
                                </p>
                                <p className="par-2">
                                    Or you just want to share your opinion or tell us something new in different subjects like Politics, Sport, Science and etc?
                                </p>
                                <p className="par-3">
                                    So why don't you join us? 
                                </p>
                                <div className="button-join">
                                    <Link to="/register" className="linkRegister">Join us</Link>
                                </div>
                    </div>
                    
                </div>
            </div>

            <div className="fun-facts">
                <div className="container-fun">
                    <div className="row-fun">
                        <div className="col-md-6">
                            <div className="content">
                                <h2>Our stats for the last month</h2>
                                <div className="col-md-6 align-self-center">
                                    <div className="row-fun-1">
                                    <div className="col-md-6">
                                        <div className="count-area-content">
                                        <div className="count-digit">945</div>
                                        <div className="count-title">Users</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="count-area-content">
                                        <div className="count-digit">1280</div>
                                        <div className="count-title">Posts</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="count-area-content">
                                        <div className="count-digit">578</div>
                                        <div className="count-title">Reviews</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="count-area-content">
                                        <div className="count-digit">26</div>
                                        <div className="count-title">Awards Won</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>
          
                  
        </div>
    );
};

export default Home;