import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LoginForm from '../LoginForm';
import SignUp from '../AccountsWrapper/sign-up';
import { Meteor } from 'meteor/meteor';
const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function LoginSignUp(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Login / Sign-Up
        </Typography>
        <Typography variant="h5" component="h2">
         <SignUp/>   
         <LoginForm/> 
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(LoginSignUp);