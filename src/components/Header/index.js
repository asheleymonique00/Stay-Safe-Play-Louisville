// import React, { Component } from 'react';
// import { Route, Link, withRouter } from 'react-router-dom';
// import Modal from 'react-modal';


// //Custom Components 
// import SignUp from './Components/SignUp';
// import Login from './Components/Login';

// //Import Axios Calls
// import { signUpUser, loginUser} from './Service/api_helper';

import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
// class Header extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             currentUser: null,
//             modal: false
//         }
//     }


// render() {
  return(
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Sign Up</a>
                <a href="#">Login</a>
                {/* <a href="#">About Us</a> */}
            </nav>
            {/* <div>
                social media links
            </div> */}
        </header>
   )

 }

export default Header;

// export default withRouter(Header);
