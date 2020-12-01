import React,{Component} from 'react';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import AdminNavbar from '../admin-navbar/main-navbar';
import resetAction from '../../actions/resetPassword/resetPassword';

class ResetPassword extends Component{
  constructor(){
    super();
    this.state={
      email:'',
    }
  }
  handleEmail = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });    
  }
  
  handleReset=(event)=>{
    event.preventDefault();
    const {resetPass} = this.props;
    const email=this.state.email;
    const data={
      email:email,
    }
    resetPass(data);
  }
  componentDidMount(){
  }
  componentWillReceiveProps(nextProps){
    const alertMessage =
    (nextProps.message && toast.success(nextProps.message)) ||
    (nextProps.resetErrors && toast.error(nextProps.resetErrors));

  return !nextProps.loading && alertMessage;
  }
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
                <h3 className='text-center font-weight-light my-4'>Forget Password</h3>
              </div>
              <div className='body'>
                <form className='form-group' onSubmit={this.handleReset}>
                <label className='small mb-1'>Email</label>
                  <input
                    name='email'
                    type='text'
                    placeholder='Enter email address'
                    className='form-control py-2'
                    onChange={this.handleEmail}
                  ></input>
                  <div className='form-group'>
                    <button className='btn btn-secondary btn-block'>Reset</button>
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
const mapStateToProps = ({reset:{data,resetErrors,message,loading}}) =>{
  return{
    data,
    message,
    resetErrors,
    loading,
  }
}
export default connect(mapStateToProps,{resetPass:resetAction})(ResetPassword);