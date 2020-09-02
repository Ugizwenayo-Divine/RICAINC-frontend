import React, {Component} from 'react';
import './landingMiddle.css';
import { withRouter } from "react-router-dom";

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
  render(){
    let token = localStorage.getItem("token");
    const disable = token?false:true
    const {product}=this.props;
    const visibility = this.props.visibility?'visible':'hidden';
    return(
      
      <div id="myModal" className="order-modal" style={{visibility:visibility}} onClick={this.props.clicked}>
      <div className='container' style={{visibility:visibility}}>
        <div className='order-modal-content'>
            <span className="close" onClick={this.props.clicked}>&times;</span>
          <h5>The {product.name}</h5>
          <hr/>
            <p><strong>Category: </strong>{product.category}</p>
            <p><strong>brand: </strong>{product.brand}</p>
            <p><strong>price: </strong>{product.price}</p>
            <p><strong>Available quantity: </strong>{product.quantity}</p>
          <button 
          className='btn btn-secondary'
          onClick={()=>{this.handleButtonClick('/order',product)}}
          disabled={disable}
          >ORDER</button>
        </div>
      </div>
      </div>
    )
  }
}
export default withRouter(MiddleModal);