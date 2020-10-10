import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import AdminNavbar from '../admin-navbar/admin-navbar';
import adverts from '../../actions/displayAdverts/displayAdverts';
import AdvertsSkeleton from './display-adverts-skeleton';

const { getAllAdverts, getAdvertsType, deleteAdvert } = adverts;
class AllAdvertisements extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      search: null,
    };
  }
  componentDidMount() {
    const { getAll } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    getAll();
  }
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
  handleDelete(id) {
    const { deleteAdvertisement } = this.props;
    deleteAdvertisement(id);
  }
  handleUpdate = (pathToMyComponent, data) => {
    const token = localStorage.getItem('token');
    if (token === undefined || token === ' ' || token === null) {
      return alert('not logged in');
    } else {
      this.props.history.push({
        pathname: pathToMyComponent,
        state: { advertisement: data },
      });
    }
  };
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { getAdvertsType } = this.props;
    getAdvertsType(this.state.search);
  };
  handleAll = (e) => {
    e.preventDefault();
    const { getAll } = this.props;
    getAll();
  };
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
    console.log(adverts, 'adv', data, 'data');
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
                style={{
                  fontSize: '24px',
                  color: '#8f8d8d',
                }}
              >
                All advertisements <i class='fas fa-ad'></i>
              </h4>
              <form className='form-inline' onSubmit={this.handleSubmit}>
                <div className='input-group mr-sm-2'>
                  <select
                    className='custom-select'
                    onChange={this.handleChange}
                  >
                    <option defaultValue>Choose...</option>
                    <option value='internal'>internal</option>
                    <option value='external'>external</option>
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
            <div className='container'>
              {!loading && data ? (
                data.map((dt) => (
                  <div
                    className='card'
                    key={dt.id}
                    style={{ width: '100%', marginBottom: '1%' }}
                  >
                    <div className='card-body'>
                      <div className='card-title'>
                        <h5>{dt.title}</h5>
                        <p style={{ float: 'right', marginTop: '-2%' }}>
                          {dt.type}
                        </p>
                      </div>
                      <h6 className='card-subtitle mb-2 text-muted'>
                        {dt.advertisingCompany}
                      </h6>
                      <div className='card-text' style={{ marginBottom: '2%' }}>
                        {dt.description}
                      </div>
                      <button
                        className='btn btn-outline-secondary my-2 my-sm-0 mr-sm-2'
                        onClick={() => {
                          this.handleUpdate('/updateadvertisement', dt);
                        }}
                        type='button'
                      >
                        UPDATE
                      </button>
                      <button
                        className='btn btn-outline-danger my-2 my-sm-0'
                        onClick={() => {
                          this.handleDelete(dt.id);
                        }}
                        type='button'
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <AdvertsSkeleton />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state, 'statesss');
  return {
    loading: state.allAdverts.loading,
    advertisementErrors: state.allAdverts.searchErrors,
    message: state.allAdverts.message,
    data: state.allAdverts.advertisements,
    deleteLoading: state.deleteAdvertisement.loading,
    deleteMessage: state.deleteAdvertisement.message,
    deleteErrors: state.deleteAdvertisement.advertisementErrors,
  };
};
export default connect(mapStateToProps, {
  getAll: getAllAdverts,
  getAdvertsType: getAdvertsType,
  deleteAdvertisement: deleteAdvert,
})(AllAdvertisements);
