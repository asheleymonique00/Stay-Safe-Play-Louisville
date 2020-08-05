import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { putProfile } from '../Service/api_helper';
import Card from '../components/UI/Card';



/**
* @author
* @function Profile
**/

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.currentUser.username,
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
            billing_address: this.props.currentUser.billing_address,     
            phone: this.props.currentUser.phone   
            
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      }

      
    // handleSubmit = async (e, id, values) => {
    //     e.preventDefault();
    //     const editUser = await putProfile(this.props.currentUser._id, values);
    //     this.setState({
    //         username: editUser.username,
    //         name: editUser.name,
    //         email: editUser.email,
    //         billing_address: editUser.billing_address,     
    //         phone: editUser.phone   
            
    //     })
    //   }




  render(){           
  return(
      
    <div>                      
    
    <div>
        <Card>
        <div className="center"><h2>Profile Page</h2>
    <div className="profilePage">
            <div className="userInfo">
                <h3>Username: {this.props.currentUser.username}</h3>
                <h3>Name: {this.props.currentUser.name}</h3>
                <h3>Email: {this.props.currentUser.email}</h3>
                <h3>billing_address: {this.props.currentUser.billing_address}</h3>
                <h3>phone: {this.props.currentUser.phone}</h3>                
            </div>                
            <form onSubmit={(e) => this.props.updateProfile(e, this.state)}>
                {/* <button>Edit Account</button> */}
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} /> <br></br>
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/><br></br>
                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/><br></br>
                <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange}/><br></br>
                <input type="text" name="billing_address" placeholder="billing_address" value={this.state.billing_address} onChange={this.handleChange}/><br></br>
                <input type="submit" value="Submit Post" />
           </form>
           </div>           
    </div>
    </Card>     
    </div>
    </div>
    
  )

 }
}

export default withRouter(Profile);