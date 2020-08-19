import React from 'react';
import './landingMiddle.css';

const middleModal = (props) => {
    const {product}=props;
    const visibility = props.visibility?'visible':'hidden';
    return(
      <div className='middle-modal' style={{visibility:visibility}}>
        <div className='close-modal' onClick={props.clicked}>&times;</div>
        <div className='modal-content'>
          <h5>The {product.name}</h5>
          <hr/>
            <p><strong>Category: </strong>{product.category}</p>
            <p><strong>brand: </strong>{product.brand}</p>
            <p><strong>price: </strong>{product.price}</p>
            <p><strong>Available quantity: </strong>{product.quantity}</p>
          <button>ORDER</button>
        </div>
      </div>
    )
}
export default middleModal;