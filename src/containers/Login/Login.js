import React, { Component } from 'react';
import Card from '../../components/UI/Card';
import { withRouter } from 'react-router-dom';
import {loginUser} from "../../Service/api_helper"

/**
* @author
* @function Login
**/

// const Login = (props) => {
//   return(
//     <div>Login</div>
//    )

//  }

// export default Login


class Login extends Component {
    constructor(props) {
        super(props);

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


    render(){
        return (
            <Card>
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
            <h2>Login</h2>
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            <input type="submit" value="Login" />            
            </form>
            </Card>
        )
    }
}

export default Login;
