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
import ClientOrders from './order/clientOrders/clientOrders';
import AllProducts from './display-products/display-products';
import AllOrders from './order/displayOrders/displayOrders';
import AllAdverts from './display-adverts/display-adverts';
import AllAnnounce from './display-announce/display-annouce';
import AllUsers from './display-users/display-users';
import AllNews from './display-news/display-news';
import AddingFeedback from './feedback';
import AddingRefund from './adding-refund';
import UpdateUser from './update-user/update-user';
import UpdateProduct from './update-product/update-product';
import UpdateNews from './update-news/update-news';
import UpdateAnnouncement from './update-announcement/update-announcement';
import UpdateAdvertisement from './update-advertisement/update-advertisement';
import AddQuantity from './add-quantity/add-quantity';
import ClientRefund from './display-refund/display-client-refunds/client-refunds';
import DisplayRefunds from './display-refund/display-all/display-all';
import DisplayFeedback from './display-feedback/display-feedback';

const Routes = () => (
  <Switch>
    {/* Auth routes */}
    <Route exact path='/' component={Landing} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/login' component={Login} />

    {/* Product routes*/}
    <Route exact path='/addproduct' component={AddingProduct} />
    {/* product order */}
    <Route exact path='/order' component={Order} />
    {/* Advertisement routes*/}
    <Route exact path='/addadvert' component={AddingAdvert} />
    {/* Announcement routes*/}
    <Route exact path='/addannouncement' component={AddingAnnouncement} />
    {/* News routes*/}
    <Route exact path='/addnews' component={AddingNews} />
    {/* Adding Advertisement */}
    <Route exact path='/addadvertisement' component={AddingAdvert} />
    {/* Displaying client orders */}
    <Route exact path='/displayclientorders' component={ClientOrders} />
    {/* all products */}
    <Route exact path='/displayproduct' component={AllProducts} />
    {/* all orders */}
    <Route exact path='/displayorder' component={AllOrders} />
    {/* all adverts */}
    <Route exact path='/displayadvertisement' component={AllAdverts} />
    {/* all adverts */}
    <Route exact path='/displayannouncement' component={AllAnnounce} />
    {/* all users */}
    <Route exact path='/displayuser' component={AllUsers} />
    {/* all news */}
    <Route exact path='/displaynews' component={AllNews} />
    <Route exact path='/displayclientorders' component={ClientOrders} />
    {/* Feedback Routes */}
    <Route exact path='/addfeedback' component={AddingFeedback} />
    {/* Refund Routes */}
    <Route exact path='/addrefund' component={AddingRefund} />
    {/* update user */}
    <Route exact path='/updateuser' component={UpdateUser} />
    {/* update product */}
    <Route exact path='/updateproduct' component={UpdateProduct} />
    {/* update news */}
    <Route exact path='/updatenews' component={UpdateNews} />
    {/* update announcement */}
    <Route exact path='/updateannouncement' component={UpdateAnnouncement} />
    {/* update advertisement */}
    <Route exact path='/updateadvertisement' component={UpdateAdvertisement} />
    {/* add product qty */}
    <Route exact path='/updatequantity' component={AddQuantity} />
    {/* client refunds */}
    <Route exact path='/clientrefund' component={ClientRefund} />
    {/* all refunds */}
    <Route exact path='/displayrefund' component={DisplayRefunds} />
    {/* all feedback */}
    <Route exact path='/displayfeedback' component={DisplayFeedback} />
  </Switch>
);

export default Routes;
