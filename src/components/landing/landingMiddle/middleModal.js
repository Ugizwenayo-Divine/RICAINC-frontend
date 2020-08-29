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
      <div className='middle-modal' style={{visibility:visibility}}>
        <div className='close-modal' onClick={this.props.clicked}>&times;</div>
        <div className='modal-content'>
          <h5>The {product.name}</h5>
          <hr/>
            <p><strong>Category: </strong>{product.category}</p>
            <p><strong>brand: </strong>{product.brand}</p>
            <p><strong>price: </strong>{product.price}</p>
            <p><strong>Available quantity: </strong>{product.quantity}</p>
          <button 
          onClick={()=>{this.handleButtonClick('/order',product)}}
          disabled={disable}
          >ORDER</button>
        </div>
      </div>
    )
  }
}
export default withRouter(MiddleModal);