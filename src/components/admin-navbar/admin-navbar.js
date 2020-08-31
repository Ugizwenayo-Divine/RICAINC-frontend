import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './admin-navbar.css';
import DropDown from './drop-down';
class AdminNavbar extends Component {
  constructor(){
    super();
    this.state={
      clicked:false,
      details:[],
      action:'',
      leftLength:'',
    }
  }
  handleClick = (details=[],action=null) => {
    this.setState({
      clicked: !this.state.clicked,
      details: details,
      action:action,
      leftLength:action==='display'?174:(action === 'add'?68:115)
    });
  }
  handleHover = (details=[], actions=null) => {
    this.setState({
      clicked: true,
      details:details,
      action:actions,      
      leftLength:actions==='display'?174:(actions === 'add'?68:115)
    });
  }
  handleUnHover = () => {
    this.setState({
      clicked: false,
    });
  }
  handleLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.props.history.push('/');
    window.location.reload();
  }
  render(){
    const visibility = this.state.clicked?'visible':'hidden';
      return (
        <div className='admin-navbar'>
          <div className='admin-navbar-left'>
            <Link to='/'>HOME</Link>
            <span 
              onClick={()=>{this.handleClick(['product','news','advertisement','announcement'],'add')}} 
              onMouseOver={()=>{this.handleHover(['product','news','advertisement','announcement'],'add')}} 
              onMouseOut= {this.handleUnHover} >
              ADD
            </span>
            <span  
              onClick={()=>{this.handleClick(['product','advertisement','announcement','user'],'update')}} 
              onMouseOver={()=>{this.handleHover(['product','advertisement','announcement','user'],'update')}}  
              onMouseOut= {this.handleUnHover} >
              UPDATE
            </span>
            <span 
              onClick={()=>{this.handleClick(['product','advertisement','announcement','user','order'],'display')}} 
              onMouseOver={()=>{this.handleHover(['product','advertisement','announcement','user','order'],'display')}}  
              onMouseOut= {this.handleUnHover} >
              DISPLAY
            </span>
          <DropDown 
            visibility={visibility} 
            details={this.state.details}
            hover={()=>{this.handleHover(this.state.details,this.state.action)}}
            unHover={this.handleUnHover}
            coordinates={this.state.leftLength}
          />
          </div>
          <div className='admin-navbar-right'>
            <Link to='/' onClick={this.handleLogout}>LOGOUT</Link>
          </div>
      </div>
      )
  }
}
export default withRouter(AdminNavbar);