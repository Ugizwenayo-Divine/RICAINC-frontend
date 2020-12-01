import React,{Component} from 'react';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import AdminNavbar from '../admin-navbar/main-navbar';
import updatePasswordAction from '../../actions/resetPassword/updatePassword';


class UpdateUser extends Component{
  constructor(){
    super();
    this.state={
      password:'',
      confirm:'',
    }
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
  handleUpdate=(event)=>{
    event.preventDefault();
    if(this.state.password === this.state.confirm){
    const userData ={
      password:this.state.password,
    }
    this.props.updatePass(userData);
  }
  else{
    const alertMessage = toast.error("Password and Confirm does not match");

    return !this.props.loading && alertMessage;
  }
  }
  componentWillReceiveProps = (nextProps) => {
    const alertMessage =
      (nextProps.message && toast.success(nextProps.message)) ||
      (nextProps.resetErrors && toast.error(nextProps.resetErrors));

    return !nextProps.loading && alertMessage;
  };
  render(){
    
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
                <h3 className='text-center font-weight-light my-4'>Update Password</h3>
              </div>
              <div className='body'>
                <form className='form-group' onSubmit={this.handleUpdate}>
                  <label className='small mb-1'>Password</label>
                  <input
                    name='password'
                    type='password'
                    placeholder='Enter new password'
                    className='form-control py-2'
                    onChange={this.handleChange}
                  ></input>
                  <br></br>
                  <label className='small mb-1'>Confirm</label>
                  <input
                    name='confirm'
                    type='password'
                    placeholder='confirm password'
                    className='form-control py-2'
                    onChange={this.handleChange}
                  ></input>
                  <div className='form-group'>
                    <button className='btn btn-secondary btn-block'>Update</button>
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
const mapStateToProps = ({updatePassword:{data,resetErrors,message,loading}}) =>{
  return{
    data,
    message,
    resetErrors,
    loading,
  }
}
export default connect(mapStateToProps,{updatePass:updatePasswordAction})(UpdateUser);