import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight,faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import studyActions from '../../actions/study/addStudy';
import AdminNavbar from '../admin-navbar/admin-navbar';
import ClientNavbar from '../admin-navbar/client-navbar';
import MainNavbar from '../admin-navbar/main-navbar';
import Footer from '../contactUs/contactUs';
import './consultant-study.css';
import StudySkeleton from './consultant-studySkeleton';
// import './allStudies.css';

const { displayStudy } = studyActions;
class AllStudies extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      description: null,
      user: {},
      currentIndex: 0,
    };
  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      nextProps.designErrors && toast.error(nextProps.designErrors);

    return !nextProps.loading && alertMessage;
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user });
    this.props.displayStudy();
  }
  handleNext = () => {
    const { data } = this.props;
    if (this.state.currentIndex === data.length - 1) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };
  handlePrevious = () => {
    const { data } = this.props;
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: data.length - 1 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  };

  render() {
    const { data, loading } = this.props;
    // const spanColor = loading?'#f0f0f0e7':'#000000';
    return (
      <div
        style={{
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        {this.state.user ? (
          this.state.user.type !== 'admin' ? (
            <ClientNavbar />
          ) : null
        ) : null}
        <div className='container'>
          <div>
            <ToastContainer
              position={toast.POSITION.TOP_CENTER}
              className='toastMessages'
              style={{ width: '700px' }}
            />
            {this.state.user ? (
              this.state.user.type === 'admin' ? (
                <AdminNavbar />
              ) : null
            ) : (
              <MainNavbar />
            )}
            <br></br>
            <br></br>
            <div className='study'>
              <div className='study-image'>
                <div
                  style={{
                    width: '100%',
                    marginLeft: '0',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '30px',
                  }}
                >
                  WELCOME TO RICA
                </div>
                {!loading && data && data.length > 0 ? (
                  data.map((data) => (
                    <div
                      style={{ width: '100%', height: 'auto' }}
                      key={data.id}
                    >
                      <img
                        src={data.image}
                        alt=''
                        style={{
                          width: '98%',
                          height: '450px',
                          margin: 'auto',
                          boxSizing: 'border-box',
                        }}
                      ></img>
                      <div
                        style={{
                          width: '100%',
                          marginBottom: '3%',
                          marginTop: '2%',
                          marginLeft: '2%',
                          marginRight: 'auto',
                        }}
                      >
                        <h4>
                          Description <i className='fas fa-info-circle'></i>
                        </h4>
                        <div style={{ width: '100%' }}>{data.description}</div>
                        <hr />
                      </div>
                    </div>
                  ))
                ) : (
                  <StudySkeleton />
                )}
              </div>
              <div className='contact'>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AllStudies.propTypes = {
  studyErrors: PropTypes.string,
  message: PropTypes.string,
  displayStudy: PropTypes.func,
};

const mapStateToProps = ({
  displayStudy: { loading, studyErrors, message, data },
}) => ({
  loading,
  studyErrors,
  message,
  data,
});

export default connect(mapStateToProps, {
  displayStudy,
})(AllStudies);
