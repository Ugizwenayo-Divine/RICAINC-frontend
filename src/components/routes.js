import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup';

const Routes = () => (
  <Switch>
    {/* Auth routes */}
    <Route exact path='/signup' component={Signup} />
  </Switch>
);

export default Routes;
