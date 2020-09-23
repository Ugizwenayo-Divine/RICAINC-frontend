import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { newAdvert } from '../../actions/advert';
import './addadvert.css';
import AdminNavbar from '../admin-navbar/admin-navbar';

class AddingAdvert extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      image: '',
      type: '',
      advertisingCompany: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    if (this.state.image) {
      formData.append('image', this.state.image);
    }
    formData.append('type', this.state.type);
    formData.append('advertisingCompany', this.state.advertisingCompany);

    this.props.newAdvert(formData);
  };
  titleChange = (event) => {
    this.setState({ title: event.target.value });
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

  typeChange = (event) => {
    this.setState({ type: event.target.value });
  };

  advertisingCompanyChange = (event) => {
    this.setState({ advertisingCompany: event.target.value });
  };

  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.advertisementErrors &&
        toast.error(nextProps.advertisementErrors));

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
          <div className='formAdvert'>
            <div className='headerAdvert'>
              <h3 className='text-center font-weight-light my-4'>New Advert</h3>
            </div>
            <div className='bodyAdvert'>
              <form className='form-group' onSubmit={this.handleSubmit}>
                <div className='form-row'>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Title</label>
                    <input
                      name='title'
                      className='form-control py-4'
                      placeholder='Enter the title of the Advert'
                      onChange={this.titleChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Type</label>
                    <input
                      name='type'
                      className='form-control py-4'
                      placeholder='Enter the type(Internal/External)'
                      onChange={this.typeChange}
                    ></input>
                  </div>
                  <div className='col-md-12'>
                    <label className='small mb-1'>Description</label>
                    <textarea
                      rows='7'
                      cols='20'
                      name='description'
                      className='form-control py-4'
                      placeholder='Enter the description'
                      onChange={this.descriptionChange}
                    ></textarea>
                  </div>

                  <div className='col-md-6'>
                    <label className='small mb-1'>Advertising Company</label>
                    <input
                      name='advertisingCompany'
                      className='form-control py-4'
                      placeholder='Enter the advertising company'
                      onChange={this.advertisingCompanyChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Image</label>
                    <br></br>
                    <input
                      type='file'
                      className=''
                      id='image'
                      onChange={this.imageChange}
                    ></input>
                  </div>
                </div>
                <br />
                <div className='form-group'>
                  <button className='btn btn-secondary btn-block'>
                    Add Advert
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
AddingAdvert.propTypes = {
  advertisementErrors: PropTypes.string,
  message: PropTypes.string,
};
const mapStateToProps = ({
  advert: { loading, advertisementErrors, message },
}) => ({
  loading,
  advertisementErrors,
  message,
});
export default connect(mapStateToProps, {
  newAdvert,
})(AddingAdvert);
