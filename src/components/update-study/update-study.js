import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import studyActions from '../../actions/study/addStudy';
import AdminNavbar from '../admin-navbar/admin-navbar';

const {
    updateStudy
} = studyActions;
class UpdateStudy extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      image: '',
    };
  }
  handleSubmit = (e,id) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('description', this.state.description);
    if (this.state.image) {
      formData.append('image', this.state.image);
    }
    this.props.updateStudy(id,formData);
  };

  descriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  imageChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    if (event.target.files) {
      this.setState({ [event.target.id]: event.target.files[0] });
    }
  };
  componentDidMount(){
    const study = this.props.location.state?this.props.location.state.study:null;
    if(study){
    this.setState({
      description:study.description,
      image:study.image
    });
  }
  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.studyErrors && toast.error(nextProps.studyErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    const study = this.props.location.state?this.props.location.state.study:null;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
    }
    if (!this.props.location.state) {
      return <Redirect to='/displaystudies'/>
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
          <div className='formNews'>
            <div className='headerNews'>
              <h3 className='text-center font-weight-light my-4'>Update Study</h3>
            </div>
            <div className='bodyNews'>
              <form className='form-group' onSubmit={(event)=>{this.handleSubmit(event,study.id)}}>
                <div className='form-row'>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Image</label>
                    <br></br>
                    <input
                      type='file'
                      id='image'
                      onChange={this.imageChange}
                    ></input>
                  </div>
                  <div className='col-md-12'>
                    <label className='small mb-1'>Description</label>
                    <textarea
                      rows='4'
                      cols='20'
                      name='description'
                      className='form-control py-4'
                      value={this.state.description}
                      placeholder='Enter the description'
                      onChange={this.descriptionChange}
                    ></textarea>
                  </div>
                </div>
                <br />
                <div className='form-group'>
                  <button className='btn btn-secondary btn-block'>
                    Update
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
UpdateStudy.propTypes = {
  studyErrors: PropTypes.string,
  message: PropTypes.string,
};
const mapStateToProps = ({ updateDesign: { loading, studyErrors, message } }) => ({
  loading,
  studyErrors,
  message,
});
export default connect(mapStateToProps, {
  updateStudy:updateStudy,
})(UpdateStudy);
