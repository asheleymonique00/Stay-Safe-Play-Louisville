import React from 'react';
import './style.css';
import Card from '../UI/Card'

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
        <div className="blogPostContainer"> 
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Come have a picnic at Cherokee Park</h1>
                    <span className="postedBy">Created by Asheley Howard Brown</span>
                </div>

                <div className="postImgContainer">                    
                    <img src={require('../../blogPostImages/cherokeepark.jpg')} alt="Cherokee Park Image"/>
                </div>
              
            </Card>
        </div>
    
   )

 }

export default BlogPost