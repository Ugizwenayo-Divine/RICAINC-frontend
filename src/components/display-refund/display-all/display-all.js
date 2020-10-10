import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RefundsSkeleton from './allSkeleton';
import AdminNavbar from '../../admin-navbar/admin-navbar';
import refundActions from '../../../actions/refund/displayRefund';

const { getAll, statusRefund } = refundActions;
class AllRefund extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    const { getAllRefunds } = this.props;
    getAllRefunds();
  }
  componentWillReceiveProps(nextProps) {
    const { statusLoading, statusMessage } = this.props;
    if (!statusLoading && statusMessage) {
      window.location.reload();
    }
  }
  handleApprove = (id) => {
    console.log('iddddddd', id);
    const { refundStatus } = this.props;
    const data = {
      status: 'approved',
    };
    refundStatus(id, data);
  };
  handleReject = (id) => {
    const { refundStatus } = this.props;
    const data = {
      status: 'rejected',
    };
    refundStatus(id, data);
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
    const margTop = this.state.user.type === 'admin' ? '5%' : '2%';
    return (
      <div style={{ width: '100%' }}>
        <div className='table-responsive-md container'>
          <AdminNavbar />
          <h4
            style={{
              textAlign: 'center',
              marginTop: margTop,
            }}
          >
            All Refunds
          </h4>
          {!loading && data ? (
            <table
              style={{ width: '100%' }}
              className='table table-bordered table-hover table-sm'
            >
              <thead className='thead-dark'>
                <tr>
                  <th>OrderNumber</th>
                  <th style={{ width: '30%' }}>Description</th>
                  <th>Requested At</th>
                  <th>Requested By</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data.map((dt) => {
                const date = new Date(dt.createdAt);
                return (
                  <tbody key={dt.id}>
                    <tr>
                      <td>{dt.refundOrder}</td>
                      <td>{dt.description}</td>
                      <td>{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()},  ${date.getHours()}:${date.getMinutes()}`}</td>
                      <td>{dt.createdBy}</td>
                      <td>{dt.status}</td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-secondary py-0'
                          disabled={dt.status === 'approved' ? true : false}
                          onClick={() => {
                            this.handleApprove(dt.id);
                          }}
                        >
                          ACCEPT
                        </button>{' '}
                        &nbsp;
                        <button
                          type='button'
                          className='btn btn-danger py-0'
                          disabled={dt.status === 'rejected' ? true : false}
                          onClick={() => {
                            this.handleReject(dt.id);
                          }}
                        >
                          REJECT
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          ) : (
            <RefundsSkeleton />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state, 'stattetete');
  return {
    loading: state.displayRefund.loading,
    refundErrors: state.displayRefund.refundErrors,
    data: state.displayRefund.data,
    message: state.displayRefund.message,
    statusLoading: state.refundStatus.loading,
    statusMessage: state.refundStatus.message,
  };
};
export default connect(mapStateToProps, {
  getAllRefunds: getAll,
  refundStatus: statusRefund,
})(AllRefund);
