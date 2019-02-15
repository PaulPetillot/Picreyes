import React, { Component } from 'react';
import SinglePost from "../SinglePost";
import { withTracker } from 'meteor/react-meteor-data';
import './style.css';
import Posts from '../../../api/posts';

class PostWrapper extends Component{

  render() {
    return (
    <div className="card-wrapper">
    {this.props.posts.map((post, idx)=>{  return <SinglePost userliked={post.userLiked} _id={post._id} image={post.image} comments={post.comments} like={post.like} description={post.description} user={post.user} key={idx} handleClickAction={this.handleClick}  idx={idx}  />})}
    </div>
    )
  }
}

export default PostWrapper = withTracker(() => {
  return {
    posts: Posts.find().fetch()
  };
})(PostWrapper);