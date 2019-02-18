import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CreatePost from '../CreatePost';
import { Meteor } from 'meteor/meteor';

export default class CreatePostButton extends React.Component {
  state = {
    open: false,
    user : ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
componentWillMount(){
  this.setState({ user: Meteor.user() ? Meteor.user()._id : '' });
}

  render() {
    return (
      // this.state.user ?
      <div>
        <Button style={{'position':'fixed', 'right' : '20px',
         'bottom' : '20px', 'backgroundColor' : '#0C6CD4', 'padding' : '10px', 'zIndex' : '5',
          'color' : 'white', 'border' : 'none', 'boxShadow' : '-1px 0px 17px -4px rgba(0,0,0,0.77)'}
        } 
        variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Create a Post
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
             To create a post, please enter your post's description and your post's image url.
            </DialogContentText>
           <CreatePost/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      // :
      // ''
    );
  }
}
