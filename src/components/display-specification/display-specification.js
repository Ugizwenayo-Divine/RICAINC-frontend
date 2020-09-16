import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Editor, EditorState, convertFromRaw } from "draft-js";
import AdminNavbar from '../admin-navbar/admin-navbar';
import ClientNavbar from '../admin-navbar/client-navbar';
import MainNavbar from '../admin-navbar/main-navbar';

class ProductSpecification extends Component {
  constructor(){
    super();
    this.state={
      image:null,
      description:null,
      user:{},
      token:null,
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    this.setState({user:user, token:token});
  }
  handleButtonClick = (pathToMyComponent, data) => {
      this.props.history.push({
        pathname: pathToMyComponent,
        state: {product: data}
      });
  }
  
  render() {
    const {product}=this.props.location.state;
    let description='';
    if (product.description){
      description = JSON.parse(product.description);
      const contentState = convertFromRaw(description);
      description = EditorState.createWithContent(contentState);
    }
    return (
      <div style={{
        overflowY: 'scroll',
        overflowX: 'hidden'}}>
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
          <div>
          <div>
            <div style={{width:'100%',height:'100%', display:'inline-flex'}}>
              <div className='container' style={{width:'65%',height:'600px', padding:'10px', backgroundColor:'#f0f0f0e7'}}>
                <h3><strong>{product.name}</strong></h3>
                <img 
                  src={product.image} 
                  alt=''
                  style={{width: '100%',height: '78%', marginBottom:'1%', boxSizing:'border-box'}}>
                </img>
                <div className='form-group order-button' style={{width:'50%', marginLeft:'0', paddingBottom:'2%'}}>
                  <button className='btn btn-secondary col-md-5' 
                    onClick={()=>{this.handleButtonClick('/order',product)}}
                    disabled={this.state.token?false:true}
                  >
                    Order
                  </button>
                  <button className='btn btn-danger col-md-5' 
                    onClick={()=>{this.handleButtonClick('/',null)}}
                  >
                    Cancel
                  </button>
                </div>
                  <div>{!this.state.token?<small style={{color:'red'}}>You only order while logged in</small>:null}</div>
              </div>
              <div style={{width:'30%', height:'auto',paddingTop:'2%', marginLeft:'5%'}}>
                <h4><strong>Product Specifications</strong></h4>
                <hr/>
                <div style={{width:'100%', height:'100%'}}>
                  <p><strong>Name:</strong> {product.name}</p>
                  <p><strong>Brand:</strong> {product.brand}</p>
                  <p><strong>Category:</strong> {product.category}</p>
                  <p><strong>Unit price:</strong> {product.price}</p>
                  <p><strong>Available:</strong> {product.quantity} units</p><br/>
                  <div><strong>More Details</strong> <hr style={{width:'30%', marginLeft:0}}/> {product.description?<Editor editorState={description} readOnly={true} />:null}</div>
                </div>
              </div>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
ProductSpecification.propTypes = {
  studyErrors: PropTypes.string,
  message: PropTypes.string,
  displayStudy: PropTypes.func,
};

const mapStateToProps = ({
  displayStudy: { loading, studyErrors, message, data }
}) => ({
  loading,
  studyErrors,
  message,
  data,
});

export default connect(mapStateToProps)(ProductSpecification);
