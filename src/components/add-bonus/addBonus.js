import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AdminNavbar from '../admin-navbar/admin-navbar';
import bonusActions from '../../actions/bonus/bonusActions';
// import DeleteChecker from '../deleteChecker/deleteChecker';

const { createBonus } = bonusActions;




class AddBonus extends Component{
  constructor(){
    super();
    this.state={
      bonus:'',
    }
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      bonus:event.target.value
    });
  };
  
  handleSubmit=(event)=>{
    event.preventDefault();
    const data={
      name:this.state.bonus,
    }
    this.props.createBonus(data);
  }
  componentWillReceiveProps(nextProps){
    const alertMessage =
    (nextProps.message && toast.success(nextProps.message)) ||
    (nextProps.bonusErrors && toast.error(nextProps.bonusErrors));

  return !nextProps.loading && alertMessage;
  }
  render(){
    const token = localStorage.getItem('token');
    const loggedUser = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      return <Redirect to='/login'/>
    }
    if (loggedUser.type === 'client'){
      return <Redirect to='/'/>
    }
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
                <h3 className='text-center font-weight-light my-4'>Create Bonus</h3>
              </div>
              <div className='body'>
                <form className='form-group' onSubmit={this.handleSubmit}>
                    <label>Name</label>
                  <input
                    name='bonus'
                    type='text'
                    placeholder='Enter the bonus name'
                    className='form-control py-2'
                    onChange={this.handleChange}
                  ></input>
                  <div className='form-group'>
                    <button className='btn btn-secondary btn-block'>Add</button>
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
const mapStateToProps = ({bonus:{message,loading,bonusErrors}}) =>{
  return{
    message,
    loading,
    bonusErrors
  }
}
export default connect(mapStateToProps,{createBonus})(AddBonus);