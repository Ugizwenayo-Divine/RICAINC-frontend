import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import './deleteChecker.css';

class DeleteChecker extends Component{
  constructor(){
    super();
    this.state={
      payment:{}
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if(this.props.data){
      return <Redirect to={this.props.data.redirect} />
    }
  };
  handlePay(event, id){
    event.preventDefault();
    const {orderPay} = this.props;
    const data={
      id:id
    };
    orderPay(data);
  }
  
  render(){
    // console.log(this.props,'propsprops')    
    // if(this.props.data){
    //   return window.location=this.props.data.redirect;
    // }
    const {visible} = this.props;
    const visibility = visible?'visible':'hidden';
    return(
        <div id="myModal" className="order-modal" style={{visibility:visibility}} onClick={this.props.clicked}>
          <div className='container'>
          <div className="order-modal-content">
            <span className="close" onClick={this.props.clicked}>&times;</span>
            <h3 style={
              {
                textAlign: 'center',
                color: 'rgb(105, 102, 102)'
              }
            }>DELETING {this.props.item}</h3>
            <hr/>
            <h5>Are you sure, you want to delete {this.props.item} permanently?</h5>
            <div className='button-div'>
              <button 
              className='btn btn-secondary'
              onClick={this.props.clicked}>
                YES
              </button>
            </div>
            <div className='button-div'>
              <button 
              className='btn btn-danger'
              onClick={this.props.clicked}>
                NO
              </button>
            </div>
          </div>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    loading:state.payment.loading,
    paymentErrors:state.payment.orderErrors,
    data:state.payment.data,
    message:state.payment.message
  }
}
export default connect(mapStateToProps)(withRouter(DeleteChecker));