import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import RSVPUs from './containers/RSVPUs';
import Post from './containers/Post';
import SignUp from './containers/SignUp/SignUp';
import Login from './containers/Login/Login';
import Profile from './containers/profile'
import { signUpUser, loginUser } from '../src/Service/api_helper';


// function App() {

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  handleSignup = async (e, user) => {
    e.preventDefault();    
    const loadedUser = await signUpUser(user)
    console.log(loadedUser);
    this.setState({
      currentUser: loadedUser
    })
    this.props.history.push('/profile')
    
  }

  // async componentDidMount() {
  //   const currentUser = await verifyUser();
  //   if(currentUser) {
  //     this.setState({
  //       currentUser: currentUser,
  //     })      
  //   }
  // }

  handleLogin = async (e, user) => {
    e.preventDefault();
    const loadedUser = await loginUser(user);
    console.log(loadedUser);
    this.setState({
      currentUser: loadedUser
    })
    this.props.history.push('/profile')
  }


  render() {
  return (
    // <Router>
      <div className="App">
        <Header/>
        <Hero />
        <Route path="/" exact component={Home}/>
        <Route path="/rsvp-us" component={RSVPUs} />
        <Route path="/post/:postId" component={Post} />
        <Route path="/signup"  
        render={() => {return <SignUp handleSubmit={this.handleSignup}/> }} />
        <Route path="/login"
        render={() => {return <Login handleSubmit={this.handleLogin}/> }} />
        <Route path="/profile" 
        render={() => {return <Profile currentUser={this.state.currentUser}/> }} />
      </div>
    // </Router>

  );
}
}

export default withRouter(App);
