import React, { Component } from 'react';
import SinglePost from "../SinglePost";
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class ProfilePosts extends Component{

    render() {
      return (
      <div className="card-wrapper">
      {this.props.posts.map((post, idx)=>{ return (post.user._id===Meteor.user()._id) ?  <SinglePost userliked={post.userLiked} _id={post._id} image={post.image} comments={post.comments} like={post.like} description={post.description} user={post.user} key={idx} handleClickAction={this.handleClick}  idx={idx}  /> : ''})}
      </div>
      )
    }
  }
  
  export default ProfilePosts = withTracker(() => {
    return {
      posts: Posts.find().fetch(),
    };
  })(ProfilePosts);