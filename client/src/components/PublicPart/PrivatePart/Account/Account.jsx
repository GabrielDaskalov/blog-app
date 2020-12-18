import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import UserContext from '../../../../context/userContext'
import './Account.css'

class Account extends Component {

    static contextType=UserContext;

    constructor()
    {
        super()

        console.log("constructor")
        this.state=
        {
            id: null,
            username: "",
            email: "",
            age: null,
            town: "",
            country: ""
        }
    }

    componentDidMount()
    {
        this.setState({
            id: this.context.userData.user.id,
            username: this.context.userData.user.username,
            email: this.context.userData.user.email,
            age: this.context.userData.user.age,
            town: this.context.userData.user.town,
            country: this.context.userData.user.country
        })
    }


    render() {
        console.log(`The context is` ,this.context.userData.token);
        console.log(`Username is: ` ,this.state.username)
        return (
            <div className="bodyAccount">
            <div className="card">
                <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="No image" className="img"/>
                <h1 className="username">Username: {this.state.username}</h1>
                <p className="id">Id: {this.state.id}</p>
                <p className="email">Email: {this.state.email}</p>
                <p className="age">Age: {this.state.age}</p>
                <p className="town">Town: {this.state.town}</p>
                <p className="country">Country: {this.state.country}</p>
                <p className="btn"><Link to = "/changeDetails">Change details</Link></p>
            </div>
            </div>
        );
    }
}

export default Account;