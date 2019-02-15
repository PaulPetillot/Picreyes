import React, { Component } from 'react';
import SinglePost from "../SinglePost";
import { withTracker } from 'meteor/react-meteor-data';

class PostOfUser extends Component{

    render() {
        const pageURL = window.location.href;
        const idOfProfile = pageURL.substr(pageURL.lastIndexOf('/') + 1);
      return (
      <div className="card-wrapper">
      {this.props.posts.map((post, idx)=>{ return (post.user._id===idOfProfile) ?  <SinglePost userliked={post.userLiked} _id={post._id} image={post.image} comments={post.comments} like={post.like} description={post.description} user={post.user} key={idx} handleClickAction={this.handleClick}  idx={idx}  /> : ''})}
      </div>
      )
    }
  }
  
  export default PostOfUser = withTracker(() => {
    return {
      posts: Posts.find().fetch(),
    };
  })(PostOfUser);