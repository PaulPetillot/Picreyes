import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
export default () => (

  <Fragment>    
    <Switch>
    <Route exact path='/' component={Home}/>
      <Route path="/Profile" component={Profile} />
      <Route exact path="/Login" component={Login} /> 
      <Route path="/Home" component={Home} />
    </Switch>
  </Fragment>
);