import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class DeletePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
        };
    }
  
  handleClick = () => {
    this.setState({ open: true });
    Meteor.call('Posts.remove', this.props._id, this.props.userid);
  };

  handleCloseUndo = () => {
    const specificPost = Posts.findOne({_id: this.props._id})
    Meteor.call('Posts.undo', specificPost.like, specificPost.userLiked, specificPost.comments, specificPost.image, specificPost.description);
    this.setState({ open: false });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <DeleteIcon onClick={this.handleClick}>Open simple snackbar</DeleteIcon>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Post removed</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleCloseUndo}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(DeletePost);