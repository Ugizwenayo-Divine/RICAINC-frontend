import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import TransportSkeleton from './transportSkeleton';
import AdminNavbar from '../admin-navbar/admin-navbar';
import transportActions from '../../actions/transport/transportActions';

const { displayTransport } = transportActions;

class AllTransport extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    const { displayTransport } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    displayTransport();
  }
  componentWillReceiveProps(nextProps) {
    const alertMessage =
      (nextProps.transportErrors && toast.error(nextProps.transportErrors));

    return !nextProps.loading && alertMessage;
  }
  handleUpdate = (pathToMyComponent, data) => {
    console.log('dataaa', data);
    const token = localStorage.getItem('token');
    if (token === undefined || token === ' ' || token === null) {
      return alert('not logged in');
    } else {
      this.props.history.push({
        pathname: pathToMyComponent,
        state: { transport: data },
      });
    }
  };
  render() {
    const { loading, districts } = this.props;
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
              <h4 style={{ color: '#8f8d8d', fontFamily: 'Montserrat', marginLeft:'auto',marginRight:'auto' }}>
                Rica Transport <i className='fas fa-car'></i>
              </h4>
            </nav>
            {!loading && districts ? (
              <table
                style={{ width: '80%', marginLeft:'auto',marginRight:'auto' }}
                className='table table-bordered table-hover table-sm'
              >
                <thead className='thead-dark'>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {districts.map((dt) => (
                  <tbody key={dt.id}>
                    <tr>
                      <td>
                        {dt.district}
                      </td>
                      <td>{dt.price}</td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-secondary py-0 mr-sm-2'
                          // style={{width:'35%'}}
                          onClick={() => {
                            this.handleUpdate('/addtransport', dt);
                          }}
                        >
                          UPDATE
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            ) : (
              <TransportSkeleton />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({transport:{loading,transportErrors,message,districts}}) => {
  return {
    loading,
    message,
    transportErrors,
    districts
  };
};
export default connect(mapStateToProps, {
  displayTransport
})(AllTransport);
