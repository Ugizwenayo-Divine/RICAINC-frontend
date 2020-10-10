import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import DisplayProductSkeleton from './display-product-skeleton';
import AdminNavbar from '../admin-navbar/admin-navbar';
import search from '../../actions/landing/search';
import product from '../../actions/product/deleteProduct';

const { displayAllProducts, searchAny } = search;
const { deleteProduct } = product;

class AllProducts extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      search: null,
    };
  }
  componentDidMount() {
    const { searchAll } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    searchAll();
  }
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchAny } = this.props;
    const searchData = {
      search: this.state.search,
    };
    searchAny(searchData);
  };
  handleAll = (e) => {
    e.preventDefault();
    const { searchAll } = this.props;
    searchAll();
  };
  handleDelete(id) {
    const { deleteProduct } = this.props;
    deleteProduct(id);
  }
  handleUpdate = (pathToMyComponent, data) => {
    console.log('dataaa', data);
    const token = localStorage.getItem('token');
    if (token === undefined || token === ' ' || token === null) {
      return alert('not logged in');
    } else {
      this.props.history.push({
        pathname: pathToMyComponent,
        state: { product: data },
      });
    }
  };
  componentWillReceiveProps(nextProps) {
    // const {deleteLoading, deleteMessage}=this.props;
    // if(!deleteLoading && deleteMessage){
    //   window.location.reload();
    // }
    const alertMessage =
      (nextProps.deleteErrors && toast.error(nextProps.deleteErrors)) ||
      (nextProps.productErrors && toast.error(nextProps.productErrors));

    return !nextProps.loading && alertMessage;
  }
  render() {
    const { loading, data } = this.props;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login' />;
    }
    if (user.type === 'client') {
      return <Redirect to='/' />;
    }
    return (
      <div style={{ width: '100%' }}>
        <div className='container'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          <AdminNavbar />
          <div className='table-responsive-md' style={{ marginTop: '5.8%' }}>
            <nav
              className='navbar navbar-light'
              style={{ width: '100%', marginLeft: '0%' }}
            >
              <h4
                className='navbar-brand'
                style={{ fontSize: '24px', color: '#8f8d8d' }}
              >
                Rica Products
              </h4>
              <form className='form-inline' onSubmit={this.handleSubmit}>
                <input
                  className='form-control py-2 mr-sm-2'
                  name='search'
                  placeholder='Search'
                  onChange={this.handleChange}
                  type='search'
                />
                <button
                  className='btn btn-outline-secondary my-2 my-sm-0 mr-sm-2'
                  type='submit'
                >
                  Search
                </button>
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
                    <th>Nº</th>
                    <th>Product</th>
                    <th>Available Qty</th>
                    <th>Unit price</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Type</th>
                    <th>Expires After</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {data.map((dt) => (
                  <tbody key={dt.id}>
                    <tr>
                      <td>{dt.id}</td>
                      <td>{dt.name}</td>
                      <td>{dt.quantity}</td>
                      <td>{dt.price}</td>
                      <td>{dt.category}</td>
                      <td>{dt.brand}</td>
                      <td>{dt.type}</td>
                      <td>{dt.due_time} hours</td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-secondary py-0 mr-sm-2'
                          // style={{width:'35%'}}
                          onClick={() => {
                            this.handleUpdate('/updatequantity', dt);
                          }}
                        >
                          ADD QTY
                        </button>
                        <button
                          type='button'
                          className='btn btn-secondary py-0 mr-sm-2'
                          // style={{width:'35%'}}
                          onClick={() => {
                            this.handleUpdate('/updateproduct', dt);
                          }}
                        >
                          UPDATE
                        </button>
                        <button
                          type='button'
                          className='btn btn-danger py-0 mr-sm-2'
                          onClick={() => {
                            this.handleDelete(dt.id);
                          }}
                        >
                          DELETE
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
    loading: state.search.loading,
    searchErrors: state.search.searchErrors,
    message: state.search.message,
    data: state.search.data,
    deleteLoading: state.deleteProduct.loading,
    deleteMessage: state.deleteProduct.message,
    deleteErrors: state.deleteProduct.productErrors,
  };
};
export default connect(mapStateToProps, {
  searchAll: displayAllProducts,
  searchAny: searchAny,
  deleteProduct: deleteProduct,
})(AllProducts);
