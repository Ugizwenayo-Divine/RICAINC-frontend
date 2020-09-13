import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { newAnnouncement } from '../../actions/announcement';
import AdminNavbar from '../admin-navbar/admin-navbar';
import './addAnnouncement.css';

class AddingAnnouncement extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      announcement: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const announcementData = {
      title: this.state.title,
      announcement: this.state.announcement,
    };
    this.props.newAnnouncement(announcementData);
  };
  titleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  announcementChange = (event) => {
    this.setState({ announcement: event.target.value });
  };

  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.announcementErrors &&
        toast.error(nextProps.announcementErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
    }
    return (
      <div id='layout'>
        <div className='container'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          <AdminNavbar/>
          <div className='formAnnouncement'>
            <div className='headerAnnouncement'>
              <h3 className='text-center font-weight-light my-4'>
                New Announcement
              </h3>
            </div>
            <div className='bodyAnnouncement'>
              <form className='form-group' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div className='col-md-12'>
                    <label className='small mb-1'>Title</label>
                    <input
                      name='title'
                      className='form-control py-4'
                      placeholder='Enter the title of the Announcement'
                      onChange={this.titleChange}
                    ></input>
                  </div>
                  <div className='col-md-12'>
                    <label className='small mb-1'>Announcement</label>
                    <textarea
                      rows='4'
                      cols='20'
                      name='announcement'
                      className='form-control py-4'
                      placeholder='Enter the announcement'
                      onChange={this.announcementChange}
                    ></textarea>
                  </div>
                </div>
                <br />
                <div className='form-group'>
                  <button className='btn btn-secondary btn-block'>
                    Add Announcement
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddingAnnouncement.propTypes = {
  announcementErrors: PropTypes.string,
  message: PropTypes.string,
};
const mapStateToProps = ({
  announcements: { loading, announcementErrors, message },
}) => ({
  loading,
  announcementErrors,
  message,
});
export default connect(mapStateToProps, {
  newAnnouncement,
})(AddingAnnouncement);
