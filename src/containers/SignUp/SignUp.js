// import React from 'react'
import React, { Component } from 'react';
import Card from '../../components/UI/Card';
import {signupUser} from "../../Service/api_helper"

/**
* @author
* @function SignUp
**/

// const SignUp = (props) => {
//   return(
//     <div>SignUp</div>
//    )

//  }

// export default SignUp;



class SignUp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
       
    }

    render() {
        return (
            <Card>
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                <h2>Sign Up</h2>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" value="SignUp" />
            </form>
            </Card>
        )
    }
}

export default SignUp;