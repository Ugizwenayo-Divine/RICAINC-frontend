import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FeedbackSkeleton from './feedbackSkeleton';
import AdminNavbar from '../admin-navbar/admin-navbar';
import feedbackActions from '../../actions/feedback/displayFeedback';

const { getAll, deleteFeedback } = feedbackActions;
class AllFeedback extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    const { getAllFeedbacks } = this.props;
    getAllFeedbacks();
  }
  // componentWillReceiveProps(nextProps){
  //   const {deleteLoading, deleteMessage}=this.props;
  //   if(!deleteLoading && deleteMessage){
  //     window.location.reload();
  //   }
  // }
  handleDelete = (id) => {
    const { deleteFeedback } = this.props;
    deleteFeedback(id);
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
    return (
      <div style={{ width: '100%' }}>
        <div className='table-responsive-md container'>
          <AdminNavbar />
          <div className='table-responsive-md' style={{ marginTop: '5.8%' }}>
            <nav
              className='navbar navbar-light'
              style={{ width: '100%', marginLeft: '0%' }}
            >
              <h4 style={{ color: '#8f8d8d' }}>
                All feedback <i class='far fa-comment'></i>
              </h4>
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
                      <div className='card-text' style={{ marginBottom: '2%' }}>
                        {dt.feedback}
                      </div>
                      <button
                        className='btn btn-outline-danger my-2 my-sm-0'
                        type='button'
                        onClick={() => {
                          this.handleDelete(dt.id);
                        }}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <FeedbackSkeleton />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state, 'stattetete');
  return {
    loading: state.displayFeedback.loading,
    feedbackErrors: state.displayFeedback.feedbackErrors,
    data: state.displayFeedback.data,
    message: state.displayFeedback.message,
    deleteMessage: state.deleteFeedback.message,
    deleteLoading: state.deleteFeedback.loading,
  };
};
export default connect(mapStateToProps, {
  getAllFeedbacks: getAll,
  deleteFeedback: deleteFeedback,
})(AllFeedback);
