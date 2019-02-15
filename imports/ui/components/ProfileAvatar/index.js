import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Button from '@material-ui/core/Button';
const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};
  function ImageAvatar(props) {
    const { classes } = props;
    return (
      <>
      { Meteor.user() ? <Link to="/Profile">
      <Grid className="avatar-div" container justify="flex-end"  alignItems="center">
      <Avatar id="avatar" alt="User Avatar" src={Meteor.user() ? Meteor.user().profile.avatar : null} className="avatar" className={classes.bigAvatar} />
      </Grid>
      </Link>
       : 
       <Link to="/Login">
      <Grid className="avatar-div" container justify="flex-end"  alignItems="center">
      <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
        Login / Sign-Up    
      </Button>
      </Grid>
      </Link>
      }
      </>
    );
  }
  export default withTracker(() => {
    return {
      user: Meteor.user()
    };
  })(withStyles(styles)(ImageAvatar));
