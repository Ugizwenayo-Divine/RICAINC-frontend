import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './admin-navbar.css';
import userHelper from '../../actions/user/allUsers';

const {
  userLogout,
} = userHelper;

class ClientNavbar extends Component {
  
  handleLogout = () =>{
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.props.userLogout(token);
  }
  render(){
    const {loading,message} = this.props;
    if(!loading && message){
      this.props.history.push('/');
      window.location.reload();
    }
      return (
        <div 
          className='navbar navbar-expand-xl navbar-light client-nav' 
          style={{
            width:'100%',
            marginLeft:'0%',}}>
          <span className="nav-item active">
            <a className="nav-link" href="/">HOME</a>
          </span>
          <span className="nav-item">
            <a className="nav-link" href="/clientrefund">REFUNDS</a>
          </span>
          <span className="nav-item">
            <a className="nav-link" href="/displayclientorders">ORDERS</a>
          </span>
          <span 
            className='nav-item ml-auto log'
            onClick={this.handleLogout}>LOGOUT</span>
        </div>
      )
  }
}
const mapStateToProps = (state)=>{
  console.log(state.userLogout,'logout');
  return({
  loading:state.userLogout.loading,
  message:state.userLogout.message,
  userLogoutErrors:state.userLogout.userErrors
})}
export default connect(mapStateToProps,{userLogout:userLogout})(withRouter(ClientNavbar));