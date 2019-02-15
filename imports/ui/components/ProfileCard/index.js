import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import './style.css';
import Button from '@material-ui/core/Button';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';
const styles = {
  card: {
    minWidth: 264,
  },
  media: {
    height: 140,
  },
};



const ProfileInfo = (props) => {
    const { classes } = props;
  return (
   <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img className="pdp-profile-page" src={Meteor.user() ? Meteor.user().profile.avatar : null} />
            </Avatar>
          }
          title={Meteor.user() ? Meteor.user().profile.name : null}
        />
        <Typography id="av" gutterBottom component="p">
        {Meteor.user() ? Meteor.user().profile.bio : null}
        </Typography>
        <CardActions>
        <Button variant="outlined" size="medium" color="primary">
          <Link onClick={async ()=> await Meteor.logout()}to="/Home"> Log Out</Link>
        </Button>
        </CardActions>
    </Card>
  )
}
export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(withStyles(styles)(ProfileInfo));
