import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { newRefund } from '../../actions/refund';
import ClietNavbar from '../admin-navbar/client-navbar';
import AdminNavbar from '../admin-navbar/admin-navbar';
import './addrefund.css';

class AddingRefund extends Component {
  constructor() {
    super();
    this.state = {
      refundOrder: '',
      description: '',
      user:{}
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const refundData = {
      refundOrder: this.state.refundOrder,
      description: this.state.description,
    };
    this.props.newRefund(refundData);
  };
  refundOrderChange = (event) => {
    this.setState({ refundOrder: event.target.value });
  };

  descriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});;
  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.refundErrors && toast.error(nextProps.refundErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to='/login'/>
    }
    return (
      <div>
      {this.state.user.type === 'client'?<ClietNavbar />:null}
      <div id='layout'>
        <div className='container'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          {this.state.user.type === 'admin'?<AdminNavbar />:null}
          <div className='formRefund'>
            <div className='headerRefund'>
              <h3 className='text-center font-weight-light my-4'>
                Refund Form
              </h3>
            </div>
            <div className='bodyRefund'>
              <form className='form-group' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div className='col-md-12'>
                    <label className='small mb-1'>Order Id</label>
                    <input
                      type='number'
                      name='refundOrder'
                      className='form-control py-4'
                      placeholder='Enter the OrderNumber'
                      onChange={this.refundOrderChange}
                    ></input>
                  </div>
                  <div className='col-md-12'>
                    <label className='small mb-1'>Description</label>
                    <textarea
                      rows='4'
                      cols='20'
                      name='description'
                      className='form-control py-4'
                      placeholder='Enter the Description'
                      onChange={this.descriptionChange}
                    ></textarea>
                  </div>
                </div>
                <br />
                <div className='form-group'>
                  <button className='btn btn-secondary btn-block'>
                    Claim Refund
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
AddingRefund.propTypes = {
  refundErrors: PropTypes.string,
  message: PropTypes.string,
};
const mapStateToProps = ({ refund: { loading, refundErrors, message } }) => ({
  loading,
  refundErrors,
  message,
});
export default connect(mapStateToProps, {
  newRefund,
})(AddingRefund);
