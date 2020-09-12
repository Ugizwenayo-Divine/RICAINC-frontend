import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { fetchDesignsAction } from '../../actions/design';
import AdminNavbar from '../admin-navbar/admin-navbar';
import ClientNavbar from '../admin-navbar/client-navbar';
import MainNavbar from '../admin-navbar/main-navbar';
import SingleDesign from './oneDesign';
import Footer from '../contactUs/contactUs';
import AllDesignSkeleton from './allDesignSkeleton';
import './alldesigns.css';

class AllDesigns extends Component {
  constructor(){
    super();
    this.state={
      clicked:false,
      image:null,
      description:null,
      user:{}
    }
  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage = (nextProps.designErrors && toast.error(nextProps.designErrors));

    return !nextProps.loading && alertMessage;
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});
    this.props.fetchDesignsAction();
  }

  single = (data) => {
    console.log(data,'single')
    this.setState({
      clicked:!this.state.clicked,
      image:data.image,
      description:data.description
    });
  };

  render() {
    const visibility = this.state.clicked?'visible':'hidden';
    const { designList } = this.props;
    const designs = designList.map((data) => ({
      id: data.id,
      description: data.description,
      image: data.image,
    }));
    return (
      <div>
      {this.state.user?(this.state.user.type !== 'admin'?(<ClientNavbar/>):null):null}
      <div className='container'>
        <div>
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
          {this.state.user?(this.state.user.type === 'admin'?(<AdminNavbar />):null):<MainNavbar/>}
          <br></br>
          <br></br>
          <div className='Design'>
          <div className='designGrid'>
            {(!this.props.loading)?designs.map((data) => (
              <div className='DesignList' key={data.id}>
                <img 
                  src={data.image} 
                  alt='' 
                  onClick={() => {this.single(data)}}
                  style={{width: '100%',height: '200px'}}></img>
              </div>
            )):<AllDesignSkeleton/>}
          </div>
          <div className="contact">
            <Footer/>
          </div>
          </div>
          <SingleDesign
            visibility={visibility}
            image={this.state.image}
            description={this.state.description}
            clicked={()=>{this.setState({clicked:!this.state.clicked})}}
            />
        </div>
      </div>
      </div>
    );
  }
}
AllDesigns.propTypes = {
  designErrors: PropTypes.string,
  message: PropTypes.string,
  fetchDesignsAction: PropTypes.func,
};

const mapStateToProps = ({
  designs: { loading, designErrors, message },
  designs: { designs },
}) => ({
  loading,
  designErrors,
  message,
  designList: designs.list,
});

export default connect(mapStateToProps, {
  fetchDesignsAction,
})(AllDesigns);
