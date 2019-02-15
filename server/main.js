import { Meteor } from 'meteor/meteor';
import Comments from '/imports/api/comments';
import Posts from '/imports/api/posts';
import Users from '/imports/api/users';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
Posts.schema = new SimpleSchema({
  like: {
    type: Number
  },
  "comments.$.comment": {
    type: String
  },
  "comments.$.userID": {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  "user.$.avatar" : {
    type : String
  },
  "user.$.name" : {
    type : String
  }
});


Users.schema = new SimpleSchema({
  avatar: {
    type: String
  },
  bio: {
    type: String
  },
  name:{
    type : String
  }

});

Comments.schema = new SimpleSchema({
  comment: {
    type: String
  },
  userID: {
    type: String
  },
  date: {
    type: Date
  }
});

// function insertUser(avatar, bio, name) {
//   const incomingData = {
//     avatar,
//     bio,
//     name
//   };
//   try {
//     Users.schema.validate(incomingData);
//     Users.insert(incomingData);
//     return incomingData;
//   }
//   catch(error) {
//     console.error(error);
//   }
// }

// function insertPost(like, comments, image, description) {
//   const incomingData = {
//     like,
//     comments,
//     image,
//     description,
//     user: Meteor.userId()
//   };
//   try {
//     console.log(incomingData);

//     Posts.schema.validate(incomingData);
//     Posts.insert(incomingData);
//     return incomingData;
//   }
//   catch(error) {
//     console.error(error);
//   }
// }

// function insertComments(comment, userID, date) {
//   const incomingData = {
//     comment,
//     userID,
//     date
//   };
//   try {
//     Comments.schema.validate(incomingData);
//     Comments.insert(incomingData);
//     return incomingData;

//   }
//   catch(error) {
//     console.error(error);
//   }
// }

Meteor.methods({
  'Posts.insert'(image, description) {
    console.log('test');
    check(image, String);
    check(description, String);
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Posts.insert({
      like:0,
      userLiked: [],
      comments: [],
      image: image,
      description : description,
      user: Meteor.user() //this.userID
    });
  }

});

//https://i.kym-cdn.com/entries/icons/original/000/028/232/hamster.jpg


export { insertPost };