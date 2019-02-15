import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/posts';

class Info extends Component {
  render() {
    

    return (
      <div>
        {this.props.posts.map((post) => {
          return (
          <>
          <p>{post._id}</p>
          <p>{post.image}</p>
          <p>{post.user}</p>
            </>
          )
        })}
      </div>
    );
  }

}

export default InfoContainer = withTracker(() => {
  return {
    posts: Posts.find().fetch(),
  };
})(Info);

