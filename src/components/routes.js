import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup';
import Login from './login';

const Routes = () => (
  <Switch>
    {/* Auth routes */}
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />
  </Switch>
);

export default Routes;
