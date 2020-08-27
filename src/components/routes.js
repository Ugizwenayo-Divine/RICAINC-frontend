import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import AddingProduct from './adding-product';
import Landing from './landing/landing';

import Order from './order/createOrder/createOrder';

const Routes = () => (
  <Switch>
    {/* Auth routes */}
    <Route exact path='/' component={Landing} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />

    {/* Adding Product */}
    <Route exact path='/addproduct' component={AddingProduct} />
    <Route exact path='/order' component={Order} />
  </Switch>
);

export default Routes;