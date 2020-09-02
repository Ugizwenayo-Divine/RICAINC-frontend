import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import AddingProduct from './adding-product';
import Landing from './landing/landing';
import Order from './order/createOrder/createOrder';
import AddingAdvert from './advert';
import AddingAnnouncement from './announcement';
import AddingNews from './news';

const Routes = () => (
  <Switch>
    {/* Auth routes */}
    <Route exact path='/' component={Landing} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />

    {/* Product routes*/}
    <Route exact path='/addproduct' component={AddingProduct} />
    <Route exact path='/order' component={Order} />
    {/* Advertisement routes*/}
    <Route exact path='/addadvert' component={AddingAdvert} />
    {/* Announcement routes*/}
    <Route exact path='/addannouncement' component={AddingAnnouncement} />
    {/* News routes*/}
    <Route exact path='/addnews' component={AddingNews} />
  </Switch>
);

export default Routes;
