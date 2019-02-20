import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DeleteIcon from '@material-ui/icons/Delete';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DeletePost extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

 handleCloseYes = () => {
    this.setState({ open: false });
     Meteor.call('Posts.remove', this.props._id, this.props.userid);
  };
  render() {
    return (
      <div>
        <DeleteIcon variant="outlined" color="primary" onClick={this.handleClickOpen}/>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Do you really want to delete this post ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              This action can't be undo.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              No
            </Button>
            <Button onClick={this.handleCloseYes} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DeletePost;