import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProfileOfUserPage from './pages/ProfileOfUserPage';
export default () => (

  <Fragment>    
    <Switch>
    <Route exact path='/' component={Home}/>
      <Route path="/Profile" component={Profile} />
      <Route path="/Login" component={Login} /> 
      <Route path="/Home" component={Home} />
      <Route exact path="/User/:id" component={ProfileOfUserPage} />
    </Switch>
  </Fragment>
);