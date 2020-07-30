import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts, setPosts] = useState([]);

useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts)
}, [posts]);

  return(
    <div className="sidebarContainer" style={{ width: props.width}}>
      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>

        <div className="asheleyProfileContainer">
            <img src={require('../../blogPostImages/Asheley2selfie.jpg')} alt="Asheley Howard Brown Image"/>
          </div>
          <div className="aboutText">
              <p className="infoText">Hello my name is Asheley and Stay Safe & Play Louisville is a concierge service that will show you how to have a great Staycation in Louisville, KY during the COVID-19 Pandemic.</p>
          </div>
      </Card>

      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="posts">

          {
            posts.map(post => {
              return (
                <NavLink key={post.id} to={`/post/${post.id}`}>
                <div className="post">
                  <h3>{post.blogTitle}</h3>
                  <span>posted by Asheley</span>              
                </div>
                </NavLink>
              )
            })
          }        
        </div>
      </Card>
    </div>

   )

 }

export default Sidebar