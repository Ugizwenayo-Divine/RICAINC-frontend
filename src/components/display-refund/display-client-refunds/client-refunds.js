import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ClientRefundSkeleton from './clientRefundSkeleton';
import ClietNavbar from '../../admin-navbar/client-navbar';
import AdminNavbar from '../../admin-navbar/admin-navbar';
import refundActions from '../../../actions/refund/displayRefund';
// import './clientOrders.css';

const { clientRefunds } = refundActions;
class ClientRefund extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    const { getClientRefunds } = this.props;
    getClientRefunds();
  }
  render() {
    const { loading, data } = this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to='/login' />;
    }
    const margTop = this.state.user.type === 'admin' ? '5%' : '2%';
    return (
      <div style={{ width: '100%' }}>
        {this.state.user.type === 'client' ? <ClietNavbar /> : null}
        <div className='table-responsive-md container'>
          {this.state.user.type === 'admin' ? <AdminNavbar /> : null}
          <h4
            style={{
              textAlign: 'center',
              marginTop: margTop,
            }}
          >
            {this.state.user.firstName} {this.state.user.lastName} Refunds
          </h4>
          {!loading && data ? (
            <table
              style={{ width: '100%' }}
              className='table table-bordered table-hover table-sm'
            >
              <thead className='thead-dark'>
                <tr>
                  <th>OrderNumber</th>
                  <th>Requested At</th>
                  <th>Status</th>
                </tr>
              </thead>
              {data.map((dt) => {
                const date = new Date(dt.createdAt);
                return (
                  <tbody key={dt.id}>
                    <tr>
                      <td>{dt.refundOrder}</td>
                      <td>{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()},  ${date.getHours()}:${date.getMinutes()}`}</td>
                      <td>{dt.status}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          ) : (
            <ClientRefundSkeleton />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state, 'stattetete');
  return {
    loading: state.clientRefund.loading,
    refundErrors: state.clientRefund.refundErrors,
    data: state.clientRefund.data,
    message: state.clientRefund.message,
  };
};
export default connect(mapStateToProps, { getClientRefunds: clientRefunds })(
  ClientRefund
);
