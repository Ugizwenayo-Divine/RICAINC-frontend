import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import advertActions from '../../actions/displayAdverts/displayAdverts';
import AdminNavbar from '../admin-navbar/admin-navbar';
// import './addadvert.css';

const{
	updateAdvert,
} = advertActions;

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
    const advertisement = this.props.location.state?this.props.location.state.advertisement:null;
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    if (this.state.image) {
      formData.append('image', this.state.image);
    }
    formData.append('type', this.state.type);
    formData.append('advertisingCompany', this.state.advertisingCompany);
console.log('state',this.state,'formadata',formData);
    this.props.updateAdvertisement(advertisement.id,formData);
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
	componentDidMount(){
    const advertisement = this.props.location.state?this.props.location.state.advertisement:null;
    if(advertisement){
    this.setState({
      title:advertisement.title,
      description:advertisement.description,
      type:advertisement.type,
      image:advertisement.image,
      advertisingCompany:advertisement.advertisingCompany
    });}
  }
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
    if (!this.props.location.state) {
      return <Redirect to='/displayadvertisement'/>
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
											value={this.state.title}
                      onChange={this.titleChange}
                    ></input>
                  </div>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Type</label>
                    <input
                      name='type'
											className='form-control py-4'
											value={this.state.type}
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
											value={this.state.description}
                      placeholder='Enter the description'
                      onChange={this.descriptionChange}
                    ></textarea>
                  </div>

                  <div className='col-md-6'>
                    <label className='small mb-1'>Advertising Company</label>
                    <input
                      name='advertisingCompany'
											className='form-control py-4'
											value={this.state.advertisingCompany}
                      placeholder='Enter the brand'
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
AddingAdvert.propTypes = {
  advertisementErrors: PropTypes.string,
  message: PropTypes.string,
};
const mapStateToProps = ({
  updateAdvertisement: { loading, advertisementErrors, message },
}) => ({
  loading,
  advertisementErrors,
  message,
});
export default connect(mapStateToProps, {
  updateAdvertisement:updateAdvert,
})(AddingAdvert);
