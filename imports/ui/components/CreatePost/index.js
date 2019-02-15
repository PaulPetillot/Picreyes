import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Description from '@material-ui/icons/Description';
import CameraAlt from '@material-ui/icons/CameraAlt';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { Meteor } from 'meteor/meteor';
import Posts from '../../../api/posts';
import { Form, Field } from 'react-final-form';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 12,
  },
});



class CreatePost extends Component  {
    constructor(props) {
    super(props);
    this.state = {
          image: '',
          description:''
         };
    }
    
render(){
    const handleSubmit = async values => {
        console.log('submitting');
     // await sleep(300)

        Meteor.call('Posts.insert', this.state.image, this.state.description);
      }
    const { classes } = this.props;
  return (
    <div>
      <div className={classes.margin}>
      <Form
    onSubmit={handleSubmit}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Description />
          </Grid>
          <Grid item>
            <TextField value={this.state.description} label="Describe your post.." onChange={e => this.setState({description : e.target.value})}/>
          </Grid>
          <Grid item>
            <CameraAlt />
          </Grid>
          <Grid item>
            <TextField value={this.state.image} onChange={e => this.setState({image : e.target.value})} label="Your image Url.." />
          </Grid>
          <Grid item>
          <Button  type="submit" variant="contained" style={{'marginBottom' : '0px'}} color="primary" className={classes.button}>
            Post
            <Send className={classes.rightIcon}/>
         </Button>
          </Grid>
        </Grid>
        </form>
    )}
    />
      </div>
    </div>
  );
}
}

export default withStyles(styles)(CreatePost);