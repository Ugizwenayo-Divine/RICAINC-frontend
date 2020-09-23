import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import './admin-navbar.css';
import DropDown from './drop-down';
import userHelper from '../../actions/user/allUsers';

const {
  userLogout,
} = userHelper;
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
      leftLength:(action==='display'?128:70)
      // leftLength:action==='display'?174:(action === 'add'?68:115)
    });
  }
  handleHover = (details=[], actions=null) => {
    this.setState({
      clicked: true,
      details:details,
      action:actions,      
      leftLength:(actions==='display'?128:70)
      // leftLength:actions==='display'?174:(actions === 'add'?68:115)
    });
  }
  handleUnHover = () => {
    this.setState({
      clicked: false,
    });
  }
  handleLogout = () =>{
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.props.userLogout(token);
  }
  render(){
    const {loading,message} = this.props;
    const visibility = this.state.clicked?'visible':'hidden';
    if(!loading && message){
      this.props.history.push('/');
      window.location.reload();
    }
      return (
        <div className='admin-navbar'>
          <div className='admin-navbar-left'>
            <Link to='/'>RICA</Link>
            <span 
              onClick={()=>{this.handleClick(['news','bonus','design','study','product','advertisement','announcement','transport'],'add')}} 
              onMouseOver={()=>{this.handleHover(['news','bonus','design','study','product','advertisement','announcement','transport'],'add')}} 
              onMouseOut= {this.handleUnHover} >
              ADD
            </span>
            {/* <span  
              onClick={()=>{this.handleClick(['user'],'update')}} 
              onMouseOver={()=>{this.handleHover(['user'],'update')}}  
              onMouseOut= {this.handleUnHover} >
              UPDATE
            </span> */}
            <span 
              onClick={()=>{this.handleClick(['user','order','news','bonus','studies','designs','product','refund','feedback','advertisement','announcement','transport'],'display')}} 
              onMouseOver={()=>{this.handleHover(['user','order','news','bonus','studies','designs','product','refund','feedback','advertisement','announcement','transport'],'display')}}  
              onMouseOut= {this.handleUnHover} >
              DISPLAY
            </span>
          <DropDown 
            visibility={visibility} 
            details={this.state.details}
            hover={()=>{this.handleHover(this.state.details,this.state.action)}}
            unHover={this.handleUnHover}
            coordinates={this.state.leftLength}
            action={this.state.action}
          />
          </div>
          <div className='admin-navbar-right'>
            <Link to='/' onClick={this.handleLogout}>LOGOUT</Link>
          </div>
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
export default connect(mapStateToProps,{userLogout:userLogout})(withRouter(AdminNavbar));