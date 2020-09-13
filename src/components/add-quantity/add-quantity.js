import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import productAction from '../../actions/product/deleteProduct';
import AdminNavbar from '../admin-navbar/admin-navbar';


const {
	addProductQty,
} = productAction;

class AddQTY extends Component{
  constructor(){
    super();
    this.state={
      product:'',
      quantity:'',
    }
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      quantity: event.target.value,
    });
  };
  
  handleUpdate=(event)=>{
    event.preventDefault();
    const product=this.props.location.state?this.props.location.state.product:null;
    const data ={
			quantity:this.state.quantity,
    }
    this.props.update(product.id,data);
  }
  componentWillReceiveProps(nextProps){
    const alertMessage =
    (nextProps.message && toast.success(nextProps.message)) ||
    (nextProps.productErrors && toast.error(nextProps.productErrors));

  return !nextProps.loading && alertMessage;
  }
  render(){
    const product=this.props.location.state?this.props.location.state.product:null;
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (user.type === 'client'){
      return <Redirect to='/'/>
    }
    // console.log(user,'usersss');
    return(
      <div id='layout'>
        <div className='container'>
        <AdminNavbar/>
          <div>
            <div className='form'>
              <ToastContainer
                position={toast.POSITION.TOP_CENTER}
                className='toastMessages'
                style={{ width: '500px' }}
              />
              <div className='header'>
                <h3 className='text-center font-weight-light my-4'>Add quantity</h3>
              </div>
              <div className='body'>
                <form className='form-group' onSubmit={this.handleUpdate}>
                  <label className='small mb-1'>Product</label>
                  <input
                    name='email'
                    type='text'
                    value= {product?product.name:''}
                    placeholder='Enter product name'
                    className='form-control py-2'
                  ></input>
                  <br></br>
                  <label className='small mb-1'>Quantity</label>
                  <input
                    name='email'
                    type='text'
                    placeholder='Enter quantity'
                    className='form-control py-2'
                    onChange={this.handleChange}
                  ></input>
                  <div className='form-group'>
                    <button className='btn btn-secondary btn-block'>add</button>
                  </div>
                </form>
              </div>
              <div className='footer'>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return{
    loading:state.addQty.loading,
    productErrors:state.addQty.productErrors,
    message:state.addQty.message,
  }
}
export default connect(mapStateToProps,{update:addProductQty})(AddQTY);