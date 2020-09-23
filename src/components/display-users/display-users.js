import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import DisplayUsersSkeleton from './display-usersSkeleton';
import AdminNavbar from '../admin-navbar/admin-navbar';
import users from '../../actions/user/allUsers';
// import DeleteChecker from '../deleteChecker/deleteChecker';

const { getAllUsers, deleteUser } = users;

class AllUsers extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
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
    const { deleteUser } = this.props;
    deleteUser(id);
  }
  handleUpdate = (pathToMyComponent, data) => {
    console.log('dataaa', data);
    const token = localStorage.getItem('token');
    if (token === undefined || token === ' ' || token === null) {
      return alert('not logged in');
    } else {
      this.props.history.push({
        pathname: pathToMyComponent,
        state: { user: data },
      });
    }
  };
  render() {
    const { loading, data } = this.props;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
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
              <h4 style={{ color: '#8f8d8d', fontFamily: 'Montserrat' }}>
                Rica registered users <i class='fas fa-user'></i>
              </h4>
            </nav>
            {!loading && data ? (
              <table
                style={{ width: '100%' }}
                className='table table-bordered table-hover table-sm'
              >
                <thead className='thead-dark'>
                  <tr>
                    <th>Nº</th>
                    <th>Names</th>
                    <th>Email</th>
                    <th>Phonenumber</th>
                    <th>Gender</th>
                    <th>Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {data.map((dt) => (
                  <tbody key={dt.id}>
                    <tr>
                      <td>{dt.id}</td>
                      <td>
                        {dt.firstName} {dt.lastName}
                      </td>
                      <td>{dt.email}</td>
                      <td>{dt.phoneNumber}</td>
                      <td>{dt.gender}</td>
                      <td>{dt.type}</td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-secondary py-0 mr-sm-2'
                          // style={{width:'35%'}}
                          onClick={() => {
                            this.handleUpdate('/updateuser', dt);
                          }}
                        >
                          UPDATE
                        </button>
                        <button
                          type='button'
                          className='btn btn-danger py-0'
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
              <DisplayUsersSkeleton />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.allUsers.loading,
    userErrors: state.allUsers.searchErrors,
    message: state.allUsers.message,
    data: state.allUsers.data,
    deleteMessage: state.deleteUser.message,
    deleteLoading: state.deleteUser.loading,
    deleteErrors: state.deleteUser.userErrors,
  };
};
export default connect(mapStateToProps, {
  getAll: getAllUsers,
  deleteUser: deleteUser,
})(AllUsers);
