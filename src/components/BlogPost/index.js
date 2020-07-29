import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    const [post, setPost] = useState({
        blogTitle: " "
    });

    useEffect(() => {
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post => post.id == postId )
        setPost(post)
    }, post);

  return(
        <div className="blogPostContainer"> 
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <p>Come have a picnic at Cherokee Park</p>
                    <span className="postedBy">Created by Asheley Howard Brown</span>
                </div>

                <div className="postImgContainer">                    
                    <img src={require('../../blogPostImages/cherokeepark.jpg')} alt="Cherokee Park Image"/>
                </div>
              
              <div className="postList">
                  <h3>Post Title</h3>
                  <p>Asheley Howard Brown</p>
                </div>
            </Card>
        </div>
    
   )

 }

export default BlogPost