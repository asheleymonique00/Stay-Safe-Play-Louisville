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
        id: " " ,
        blogCategory: " " ,
        blogTitle : " " ,
        blogImage: " " ,
        blogText: " "
    });

    const [postId, setPostId] = useState('')

    useEffect(() => {
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post => post.id == postId );
        setPost(post);
        setPostId(postId)
    }, [post, props.match.params.postId]);

    if(post.blogImage == " ") return null

  return(
        <div className="blogPostContainer"> 
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <p>Come have a Staycation in Louisville</p>
                    <span className="postedBy">Created by Asheley Howard Brown</span>
                </div>

                <div className="postImgContainer">                    
                    <img src={require(`../../blogPostImages/${post.blogImage}`)} alt="Cherokee Park Image"/>
                </div>
              
              <div className="postList">
                  <h3>{post.blogTitle}</h3>
                  <p>{post.blogText}</p>
                </div>
            </Card>
        </div>
    
   )

 }

export default BlogPost