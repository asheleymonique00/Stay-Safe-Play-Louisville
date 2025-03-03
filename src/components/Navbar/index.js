import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched')
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';


  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            {/* <li><NavLink to="/about-us">About Us</NavLink></li> */}
            <li><NavLink to="/post/1">Posts</NavLink></li>
            <li><NavLink to="rsvp-us">RSVP With Us</NavLink></li> 
            <li><NavLink to="signup">Sign Up</NavLink></li>
            <li><NavLink to="login">Login</NavLink></li>           
        </ul>
        <div className="search">
        <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
            </form>
        </div>
    </div>
   )

 }

export default Navbar