import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import DisplayProductSkeleton from '../clientOrders/clientOrdersSkeleton';
import AdminNavbar from '../../admin-navbar/admin-navbar';
import {
  getAllOrders,
  getOrder,
  deliverOrder,
} from '../../../actions/order/index';

class AllOrders extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      search: null,
    };
  }
  componentDidMount() {
    const { allOrders } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    allOrders();
  }
  componentWillReceiveProps(nextProps) {
    const { deliverLoading, deliverMessage } = this.props;
    if (!deliverLoading && deliverMessage) {
      window.location.reload();
    }
  }
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchOrder } = this.props;
    searchOrder(this.state.search);
  };
  handleAll = (e) => {
    e.preventDefault();
    const { allOrders } = this.props;
    allOrders();
  };
  handleDeliver(id) {
    const { deliverOrder } = this.props;
    deliverOrder(id);
  }
  render() {
    const { loading, data } = this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to='/login'/>
    }
    return (
      <div style={{ width: '100%' }}>
        <div className='container'>
          <AdminNavbar />
          <div className='table-responsive-md' style={{ marginTop: '5.8%' }}>
            <nav
              className='navbar navbar-light'
              style={{ width: '100%', marginLeft: '0%' }}
            >
              <h4
                className='navbar-brand'
                style={{
                  fontSize: '24px',
                  color: '#8f8d8d',
                  fontFamily: 'Montserrat',
                }}
              >
                Rica Orders <i class='fa fa-shopping-cart'></i>
              </h4>
              <form className='form-inline' onSubmit={this.handleSubmit}>
                <div className='input-group mr-sm-2'>
                  <select
                    className='custom-select'
                    onChange={this.handleChange}
                  >
                    <option defaultValue>Choose...</option>
                    <option value='pending'>pending</option>
                    <option value='payed'>payed</option>
                    <option value='canceled'>canceled</option>
                    <option value='delivered'>delivered</option>
                  </select>
                  <div className='input-group-append'>
                    <button className='btn btn-outline-secondary' type='submit'>
                      Search
                    </button>
                  </div>
                </div>
                <button
                  className='btn btn-outline-secondary my-2 my-sm-0'
                  onClick={this.handleAll}
                  type='button'
                >
                  ALL
                </button>
              </form>
            </nav>
            {!loading && data ? (
              <table
                style={{ width: '100%' }}
                className='table table-bordered table-hover table-sm'
              >
                <thead className='thead-dark'>
                  <tr>
                    <th>Product</th>
                    <th>Ordered Qty</th>
                    <th>Ordered By</th>
                    <th>Total price</th>
                    <th>status</th>
                    <th>Expires at</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {data.map((dt) => (
                  <tbody key={dt.id}>
                    <tr>
                      <td>{dt.product}</td>
                      <td>{dt.ordered_quantity}</td>
                      <td>{dt.orderedBy}</td>
                      <td>
                        {dt.amount}
                        {dt.currency}
                      </td>
                      <td>{dt.status}</td>
                      <td>{dt.due_time}</td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-secondary py-0'
                          onClick={() => {
                            this.handleDeliver(dt.id);
                          }}
                          disabled={
                            dt.status === 'canceled' ||
                            dt.status === 'delivered'
                              ? true
                              : false
                          }
                        >
                          DELIVER
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            ) : (
              <DisplayProductSkeleton />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.payment.data, 'statesss');
  return {
    loading: state.allOrders.loading,
    orderErrors: state.allOrders.orderErrors,
    data: state.allOrders.data,
    message: state.allOrders.message,
    deliverLoading: state.deliverOrder.loading,
    deliverMessage: state.deliverOrder.message,
  };
};
export default connect(mapStateToProps, {
  allOrders: getAllOrders,
  searchOrder: getOrder,
  deliverOrder: deliverOrder,
})(AllOrders);
