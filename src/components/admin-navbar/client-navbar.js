import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import './admin-navbar.css';

class AdminNavbar extends Component {
  handleLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.props.history.push('/');
    window.location.reload();
  }
  render(){
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
            <a className="nav-link" href="/">REFUNDS</a>
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
export default withRouter(AdminNavbar);