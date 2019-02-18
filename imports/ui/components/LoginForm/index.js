import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';
import { Redirect, Link } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { Form, Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});


class SignUpForm extends React.Component {
  state = {
    name: '',
    password: '',
    email: '',
    avatar:'',
    bio:'',
    signup : true,
    redirect : false
  };

handleToggleSignUp = sign =>{
    this.setState({ signup : !this.state.signup });
}

  render() {

  const checkEmailIsValid = (aString)=> {
  aString = aString || '';
  return aString.length > 1 && aString.indexOf('@') > -1;
}
const baseUrl = window.location.origin;
const checkPasswordIsValid = (aString)=> {
  aString = aString || '';
  return aString.length > 7;
}
    let emailAddress = this.state.email || '';
    let password = this.state.password || '';
    emailAddress = emailAddress.replace(/^\s*|\s*$/g, '');
    password = password.replace(/^\s*|\s*$/g, '');
    let isValidEmail = checkEmailIsValid(emailAddress);
    let isValidPassword = checkPasswordIsValid(password);

    const onSignUp = async values => {
      values.preventDefault()
    if (!isValidEmail || !isValidPassword) {
      if (!isValidEmail) {
        alert('Invalid email address');
      }
      if (!isValidPassword) {
        alert('Your password must be at least 8 characters long');
      }
    } else {  
        Accounts.createUser({
        email: emailAddress,
        password: password,
        profile: {
          avatar : this.state.avatar,
          name: this.state.name,
          bio : this.state.bio
        } 
    }); 
    }
    this.setState({redirect : true})
  }

  const onLogin = async values => {
    values.preventDefault()
    let emailAddress = this.state.email || '';
    let password = this.state.password || '';
    Meteor.loginWithPassword(emailAddress, password);
    this.setState({redirect : true})
  }

    const { classes } = this.props;

    return (
      !this.state.redirect ? 
      
      this.state.signup ? 
      <div>
        <Form
        onSubmit={onSignUp}
        render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={onSignUp} className={classes.container} autoComplete="off">
        <TextField
          
          required
          onChange={e => this.setState({name : e.target.value})}
          value={this.state.name}
          label="Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          onChange={e => this.setState({email : e.target.value})}
          label="Email"
          value={this.state.email}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          minLength={8}
          onChange={e => this.setState({password : e.target.value})}
          value={this.state.password}
          label="Password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type="password"
        />
        <TextField
          required
          onChange={e => this.setState({avatar : e.target.value})}
          value={this.state.avatar}
          label="Avatar"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          onChange={e => this.setState({bio : e.target.value})}
          value={this.state.bio}
          label="Biography"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <Button style={{'padding' : '5px', 'marginTop' : '16px', 'height' : '56px'}} variant="contained" type="submit"  color="primary" className={classes.button}>
           Sign Up
            <Fingerprint/>
         </Button>
        {/* <Button component={ Link } to="/Home" variant="contained" color="primary">
          Go to the homepage
        </Button> */}
      </form>
        )}
        />
      <p style={{'fontSize' : '15px'}} className="p-link" onClick={this.handleToggleSignUp} >Click here to login</p>
      </div>
      : 
      <div>
        <Form
        onSubmit={onLogin}
        render={({ handleSubmit, pristine, invalid }) => (
      <form style={{'display' : 'block'}} onSubmit={onLogin}>
      <div>
      <TextField
          required
          label="Email"
          onChange={e => this.setState({email : e.target.value})}
          value={this.state.email}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          value={this.state.password}
          onChange={e => this.setState({password : e.target.value})}
          label="Password"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          type="password"
        />
        <Button style={{'padding' : '5px', 'marginTop' : '16px', 'height' : '56px'}} variant="contained" type="submit"  color="primary" className={classes.button}>
            Log In
            <Fingerprint/>
         </Button>
      </div>
      {/* <Button component={ Link } to="/Home" variant="contained" color="primary">
          Go to the homepage
      </Button> */}
      </form>
        )}
        />
      <p style={{'fontSize' : '15px'}} className="p-link" onClick={this.handleToggleSignUp} >Click here to sign-up</p>
      </div>
      : 
       <Redirect to="/Home"/>
      
    );
  }
}



export default withStyles(styles)(SignUpForm);
