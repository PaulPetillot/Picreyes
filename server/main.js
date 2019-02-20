import { Meteor } from 'meteor/meteor';
import Posts from '/imports/api/posts';
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


Meteor.methods({
  'Posts.insert'(image, description) {
    check(image, String);
    check(description, String);
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
  if (image.length && description.length){
    Posts.insert({
      like:0,
      userLiked: [],
      comments: [],
      image: image,
      description : description,
      user: Meteor.user() //this.userID
    });
  }else{
    console.log('failed')
  }
},
'Posts.remove'(id, userid) {
  // Make sure the user is logged in before inserting a task
  if (! this.userId) {
    throw new Meteor.Error('not-authorized');
  }
  if (this.userId === userid){
    try {
      Posts.remove( { "_id" : id } );
   } catch (e) {
      print(e);
   }
  }
  
},
'Posts.undo'(like, userLiked, comments, image, description) {
  if (! this.userId) {
    throw new Meteor.Error('not-authorized');
  }
  Posts.insert({
    like,
    userLiked,
    comments,
    image: image,
    description : description,
    user: Meteor.user()
  });
},

});

//https://i.kym-cdn.com/entries/icons/original/000/028/232/hamster.jpg


export { insertPost };