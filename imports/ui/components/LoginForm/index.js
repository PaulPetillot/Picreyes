import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Form } from 'react-final-form';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
    signup : true
  };

handleToggleSignUp = sign =>{
    this.setState({ signup : !this.state.signup });
}

  render() {

  const checkEmailIsValid = (aString)=> {
  aString = aString || '';
  return aString.length > 1 && aString.indexOf('@') > -1;
}

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
  }

  const onLogin = async values => {
    console.log('login' + Meteor.user())
    if (!isValidEmail || !isValidPassword) {
        if (!isValidEmail) {
          alert('Invalid email address');
        }
        if (!isValidPassword) {
          alert('Your password must be at least 8 characters long');
        }
      } else {
        Meteor.loginWithPassword(emailAddress, password, function (error) {
          if (error) {
            alert('Account login failed for unknown reasons :(');
          } else {
            ''
          }
        });
      
  }}

    const { classes } = this.props;

    return (
      (this.state.signup) ? 
      <div>
        <Form
        onSubmit={onSignUp}
        render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={onSignUp} className={classes.container} noValidate autoComplete="off">
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
        <Button  type="submit"  color="primary" className={classes.button}>
           Sign Up
            <Fingerprint/>
         </Button>
         <Button color="primary" className={classes.button}>
     <Link to="/Home">Go to Homepage</Link>
    </Button>
      </form>
        )}
        />
      <p className="p-link" onClick={this.handleToggleSignUp} >Click here to login !</p>
      </div>
      : 
      <div>
        <Form
        onSubmit={onLogin}
        render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={onLogin}>
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
        <Button  type="submit"  color="primary" className={classes.button}>
            Log In
            <Fingerprint/>
         </Button>
         <Button color="primary" className={classes.button}>
     <Link to="/Home">Go to Homepage</Link>
    </Button>
      </form>
        )}
        />
      <p  className="p-link" onClick={this.handleToggleSignUp} >Click here to sign-up !</p>
      </div>
    );
  }
}



export default withStyles(styles)(SignUpForm);
