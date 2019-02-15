import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

const styles = {
  card: {
    minWidth: 264,
  },
  media: {
    height: 140,
  },
};

class ProfileInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {user: {}}
    }
  componentWillMount(){
    let user = this.props.users.filter(use => {
      const pageURL = window.location.href;

      const idOfProfile = pageURL.substr(pageURL.lastIndexOf('/') + 1);
  
      return use._id === idOfProfile
  })
    this.setState({
      user
    })  
  }
render(){
const { classes } = this.props;
const pageURL = window.location.href;
let user = this.props.users.filter(use => {
    const idOfProfile = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    return use._id === idOfProfile
})

  return (
   <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img className="pdp-profile-page" src={user.length ? user[0].profile.avatar : ''} />
            </Avatar>
          }
          title={user.length ? user[0].profile.name : ''}
        />
        <Typography id="av" gutterBottom component="p">
        {user.length ? user[0].profile.bio : ''}
        </Typography>
    </Card>
  )}
}
export default withTracker(() => {
  return {
    users: Meteor.users.find().fetch(),

  };
})(withStyles(styles)(ProfileInfo));
