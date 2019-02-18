import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import './style.css';
import Posts from '../../../api/posts';
import { Meteor } from 'meteor/meteor';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import Send from '@material-ui/icons/Send';
const styles = {
  card: {
    minWidth: 300,
  },
  media: {
    height: 220,
  },
};

const DisplayComments = (props) =>{
    return <Typography className="comments" style={{'marginTop': '15px'}}component="p">
   {props.comments.map((item, i) => <span className="comment" key={i}>{item.username+':'} {item.comment}</span>)}
   </Typography>
   };


class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likeNb : 0,
      comments : ''
    };
    }
    updateLike = async () => {
      let specificPost = Posts.findOne({_id: this.props._id})

      await this.setState({liked : !this.state.liked}) 
      if (!this.props.userliked.includes(Meteor.user()._id)) {
        Posts.update(this.props._id, {
          $set: { 
            userLiked : [...this.props.userliked, Meteor.user()._id],
            like: specificPost.like += 1 
          },
        })
      } else {
        Posts.update(this.props._id, {
          $set: { 
            userLiked : [...this.props.userliked.filter((idx) => {return idx !== Meteor.user()._id})],
            like: specificPost.like -= 1
          },
        })
      }

    }

    componentWillMount() {
      if (Meteor.user()){
      if (this.props.userliked.includes(Meteor.user()._id)){
        this.setState({liked : true})
      }else{
        this.setState({liked : false})
      }}else{
        ''
      }
    }

    handleCommentSubmit() {
      this.setState({comments : ''})
      Posts.update(this.props._id, {
        $set: { 
          comments : [...this.props.comments, {comment : this.state.comments, username : Meteor.user().profile.name}]
        },
      })
    }


render(){ 
  const { classes } = this.props;
  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.image}
        />
        
        <CardContent style={{'paddingBottom': '15px', 'paddingTop': '0px'}}>
        <CardActions style={{'marginTop': '5px'}}>
        <div style={{'marginLeft': '-12px'}} className="like-btn" onClick={() => this.updateLike()}>
                <IconButton className={classes.button} aria-label="Like">
                {this.state.liked ? <Favorite id="liked-btn"/>  :  <FavoriteBorder />}
                </IconButton> 
        </div>
        <Typography component="p">
            {this.props.like}
        </Typography>
      </CardActions>
      <Link style={{'textDecoration' : 'none'}} to={"/User/"+this.props.user._id}>
        <CardHeader className="card-header"
          avatar={
            <Avatar aria-label="Recipe" src={this.props.user.profile.avatar} className={classes.avatar}/>
          }
          title={this.props.user.profile.name}
        />
        </Link>
         <Typography id="description" component="h3">
             {this.props.description}
        </Typography>
        <DisplayComments comments={this.props.comments}/>
        <TextField value={this.state.comments} onChange={e => this.setState({comments : e.target.value})} label="Type a comment.." />
        <Fab
          onClick={(e) => this.handleCommentSubmit()}
          variant="extended"
          size="small"
          color="primary"
          type="submit" 
          className={classes.margin}
          style={{'marginTop': '14px', 'marginLeft' : '20px', 'backgroundColor' :'#CC2C2C' }}
        >
        <Send className={classes.rightIcon}/>
        </Fab>
        </CardContent>

    </Card>
  )
        }
}



export default withStyles(styles)(SinglePost);


