import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import newsActions from '../../actions/news/allNews';
import AdminNavbar from '../admin-navbar/admin-navbar';

const {
    updateNews,
} = newsActions;
class UpdateNews extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      image: '',
    };
  }
  handleSubmit = (e,id) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    if (this.state.image) {
      formData.append('image', this.state.image);
    }
    this.props.updateNews(id,formData);
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
  componentDidMount(){
    const news = this.props.location.state?this.props.location.state.news:null;
    if(news){
    this.setState({
      title:news.title,
      description:news.description,
      image:news.image
    });}
  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.newsErrors && toast.error(nextProps.newsErrors));

    return !nextProps.loading && alertMessage;
  };
  render() {
    const news = this.props.location.state?this.props.location.state.news:null;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
    }
    if (!this.props.location.state) {
      return <Redirect to='/displaynews'/>
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
              <h3 className='text-center font-weight-light my-4'>Update News</h3>
            </div>
            <div className='bodyNews'>
              <form className='form-group' onSubmit={(event)=>{this.handleSubmit(event,news.id)}}>
                <div className='form-row'>
                  <div className='col-md-6'>
                    <label className='small mb-1'>Title</label>
                    <input
                      name='title'
                      className='form-control py-4'
                      value={this.state.title}
                      placeholder='Enter the title of the News'
                      onChange={this.titleChange}
                    ></input>
                  </div>
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
UpdateNews.propTypes = {
  newsErrors: PropTypes.string,
  message: PropTypes.string,
};
const mapStateToProps = ({ updateNews: { loading, newsErrors, message } }) => ({
  loading,
  newsErrors,
  message,
});
export default connect(mapStateToProps, {
  updateNews:updateNews,
})(UpdateNews);
