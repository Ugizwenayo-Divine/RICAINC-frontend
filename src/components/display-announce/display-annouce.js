import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import AdminNavbar from '../admin-navbar/admin-navbar';
import announcement from '../../actions/landing/announcement';
import AnnounceSkeleton from './displa-announceSkeleton';
import announcementAction from '../../actions/announcement/deleteAnnouncement';

const { getAnnouncements } = announcement;
const { deleteAnnouncement } = announcementAction;
class AllAnnouncements extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  handleDelete(id) {
    const { deleteAnnouncement } = this.props;
    deleteAnnouncement(id);
  }
  handleUpdate = (pathToMyComponent, data) => {
    console.log('dataaa', data);
    const token = localStorage.getItem('token');
    if (token === undefined || token === ' ' || token === null) {
      return alert('not logged in');
    } else {
      this.props.history.push({
        pathname: pathToMyComponent,
        state: { announcement: data },
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
  componentDidMount() {
    const { getAll } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    if (this.props.data.length === 0) {
      getAll();
    }
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
              <h4 style={{ color: '#8f8d8d' }}>
                All announcements <i class='fas fa-scroll'></i>
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
                      <div className='card-title'>
                        <h5>{dt.title}</h5>
                        <hr />
                      </div>
                      <div className='card-text' style={{ marginBottom: '2%' }}>
                        {dt.announcement}
                      </div>
                      <button
                        className='btn btn-outline-secondary my-2 my-sm-0 mr-sm-2'
                        onClick={() => {
                          this.handleUpdate('updateannouncement', dt);
                        }}
                        type='button'
                      >
                        UPDATE
                      </button>
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
                <AnnounceSkeleton />
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
    loading: state.announcement.loading,
    announcementErrors: state.announcement.announcementErrors,
    message: state.announcement.message,
    data: state.announcement.announcements,
    deleteLoading: state.deleteAnnouncement.loading,
    deleteMessage: state.deleteAnnouncement.message,
    deleteErrors: state.deleteAnnouncement.announcementErrors,
  };
};
export default connect(mapStateToProps, {
  getAll: getAnnouncements,
  deleteAnnouncement: deleteAnnouncement,
})(AllAnnouncements);
