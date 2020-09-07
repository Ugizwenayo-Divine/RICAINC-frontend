import React,{Component} from 'react';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import userAction from '../../actions/user/allUsers';
import AdminNavbar from '../admin-navbar/admin-navbar';


const {
  updateUser,
} = userAction;

class UpdateUser extends Component{
  constructor(){
    super();
    this.state={
      userRole:'',
      email:'',
    }
  }
  handleEmail = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });    
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      userRole: event.target.value,
    });
  };
  
  handleUpdate=(event)=>{
    event.preventDefault();
    const user=this.props.location.state?this.props.location.state.user:null;
    const userData ={
      email:this.state.email||user.email,
      type:this.state.userRole
    }
    this.props.update(userData);
  }
  componentWillReceiveProps(nextProps){
    const alertMessage =
    (nextProps.message && toast.success(nextProps.message)) ||
    (nextProps.updateUserErrors && toast.error(nextProps.updateUserErrors));

  return !nextProps.loading && alertMessage;
  }
  render(){
    const user=this.props.location.state?this.props.location.state.user:null;
    console.log(user,'usersss');
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
                <h3 className='text-center font-weight-light my-4'>Update user</h3>
              </div>
              <div className='body'>
                <form className='form-group' onSubmit={this.handleUpdate}>
                  <label className='small mb-1'>Email</label>
                  <input
                    name='email'
                    type='text'
                    value= {user?user.email:''}
                    placeholder='Enter email address'
                    className='form-control py-2'
                    onChange={this.handleEmail}
                  ></input>
                  <br></br>
                    <label for="type">User role</label>
                    <select className="custom-select" onChange={this.handleChange}>
                      <option defaultValue>Choose role</option>
                      <option value="client">client</option>
                      <option value="admin">admin</option>
                    </select>
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
const mapStateToProps = (state) =>{
  return{
    loading:state.updateUser.loading,
    updateUserErrors:state.updateUser.updateUserErrors,
    message:state.updateUser.message,
  }
}
export default connect(mapStateToProps,{update:updateUser})(UpdateUser);