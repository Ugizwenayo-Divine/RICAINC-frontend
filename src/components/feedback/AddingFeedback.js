import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { newFeedback } from '../../actions/feedback';
import AdminNavbar from '../admin-navbar/admin-navbar';
import './addfeedback.css';

class AddingFeedback extends Component {
  constructor() {
    super();
    this.state = {
      feedback: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      feedback: this.state.feedback,
    };
    this.props.newFeedback(feedbackData);
  };
  feedbackChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.feedbackErrors && toast.error(nextProps.feedbackErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    return (
      <div id='layout'>
        <div className='container'>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          <AdminNavbar />
          <div className='formfeedback'>
            <div className='headerfeedback'>
              <h3 className='text-center font-weight-light my-4'>
                New Feedback
              </h3>
            </div>
            <div className='bodyfeedback'>
              <form className='form-group' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div className='col-md-12'>
                    <label className='small mb-1'>Feedback</label>
                    <textarea
                      rows='4'
                      cols='20'
                      name='feedback'
                      className='form-control py-4'
                      placeholder='Provide your feedback'
                      onChange={this.feedbackChange}
                    ></textarea>
                  </div>
                </div>
                <br />
                <div className='form-group'>
                  <button className='btn btn-secondary btn-block'>
                    Add Feedback
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
AddingFeedback.propTypes = {
  feedbackErrors: PropTypes.string,
  message: PropTypes.string,
};
const mapStateToProps = ({
  feedback: { loading, feedbackErrors, message },
}) => ({
  loading,
  feedbackErrors,
  message,
});
export default connect(mapStateToProps, {
  newFeedback,
})(AddingFeedback);
