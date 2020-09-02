import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getClientOrders} from '../../../actions/order';
import ClientOrdersSkeleton from './clientOrdersSkeleton';
import ClietNavbar from '../../admin-navbar/client-navbar';
import {orderPayment} from '../../../actions/order';
import './clientOrders.css';

class ClientOrders extends Component{
  constructor(){
    super();
    this.state={
      user:{},
    }
  }
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});
    const {getClientOrders} = this.props;
    getClientOrders();
  }
  handlePay(id){
    const {orderPay} = this.props;
    const data={
      id:id
    };
    orderPay(data);
  }
  render (){
    const {loading, data}=this.props;
    if(this.props.paymentData){      
     window.location=this.props.paymentData.redirect;
    }
    return (
      <div style={{width:'100%'}}>
        <ClietNavbar />
        <div className='table-responsive-md container'>
          <h4 style={
            {
              textAlign: 'center',
              fontFamily: 'Montserrat'
          }
          }>{this.state.user.firstName} {this.state.user.lastName} orders</h4>
          {((!loading && data) ? <table style={{width:'100%'}} className='table table-bordered table-hover table-sm'>
          <thead className='thead-dark'>
            <tr>
            <th>Product</th>
            <th>Ordered Qty</th>
            <th>Total price</th>
            <th>status</th>
            <th>Expires at</th>
            <th>Action</th>
            </tr>
          </thead>
          {data.map(dt=><tbody  key={dt.id}>
              <tr>
              <td>{dt.productId}</td>
              <td>{dt.ordered_quantity}</td>
              <td>{dt.amount}{dt.currency}</td>
              <td>{dt.status}</td>
              <td>{dt.due_time}</td>
              <td>
                <button 
                  type="button" 
                  className='btn btn-secondary py-0' 
                  style={{width:'35%'}}
                  onClick={()=>{this.handlePay(dt.id)}}
                  >PAY</button> &nbsp;
                <button type="button" className='btn btn-danger py-0'>CANCEL</button>
              </td>            
              </tr>
            </tbody>)}
          </table>:<ClientOrdersSkeleton/>)}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.payment.data,'statesss')
    return {
      loading:state.clientOrders.loading,
      orderErrors:state.clientOrders.orderErrors,
      data:state.clientOrders.data,
      message:state.clientOrders.message,
      paymentData:state.payment.data
    }
  }
export default connect(mapStateToProps, {getClientOrders:getClientOrders,orderPay:orderPayment})(ClientOrders);