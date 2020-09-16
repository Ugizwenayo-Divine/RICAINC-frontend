import React, {Component} from 'react';
import {connect} from 'react-redux';
import './landingMiddle.css';
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import productActions from '../../../actions/product/deleteProduct';

const{
  addRemoveBestProduct,
} = productActions;
class MiddleModal extends Component{
  constructor(){
    super();
    this.state={
      token:''
    }
  }
  handleButtonClick = (pathToMyComponent, data) => {
    
    const token = localStorage.getItem('token');
    if(token === undefined || token === ' ' || token === null){
      alert('not logged in');      
    }
    else{
      this.props.history.push({
        pathname: pathToMyComponent,
        state: {product: data}
      });
    }
  }
  addRemoveBest = (event)=>{
    event.preventDefault();
    const {product,addRemoveBestProduct} = this.props;
    const type = (product.type === 'best')?'normal':'best';
    const data={
      type:type
    }
    addRemoveBestProduct(product.id,data);
  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.productErrors && toast.error(nextProps.productErrors));

    return !nextProps.loading && alertMessage;
  };
  render(){
    let token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem('user'));
    const disable = token?false:true
    const {product}=this.props;
    const visibility = this.props.visibility?'visible':'hidden';
    return(
      
      <div id="myModal" className="order-modal" style={{visibility:visibility}} onClick={this.props.clicked}>
      <div className='container' style={{visibility:visibility}}>
      <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
        <div className='order-modal-content'>
            <span className="close" onClick={this.props.clicked}>&times;</span>
          <h5>The {product.name}</h5>
          <hr/>
            <p><strong>Category: </strong>{product.category}</p>
            <p><strong>brand: </strong>{product.brand}</p>
            <p><strong>price: </strong>{product.price}</p>
            <p><strong>Available quantity: </strong>{product.quantity}</p>
          <button 
          className='btn btn-secondary mr-sm-4'
          onClick={()=>{this.handleButtonClick('/order',product)}}
          disabled={disable}
          >ORDER</button>
          {user?(user.type === 'admin'?(<button 
          className='btn btn-secondary'
          onClick={this.addRemoveBest}
          disabled={disable}
          >ADD/REMOVE BEST</button>):null):null}
          <div>{!token?<small style={{color:'red'}}>You only order while logged in</small>:null}</div>
        </div>
      </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    loading:state.bestProduct.loading,
    message:state.bestProduct.message,
    productErrors:state.bestProduct.productErrors
    }
}
export default connect(mapStateToProps,{addRemoveBestProduct:addRemoveBestProduct})(withRouter(MiddleModal));