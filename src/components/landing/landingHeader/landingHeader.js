import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './landingHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import search from '../../../actions/landing/search';
import userHelper from '../../../actions/user/allUsers';
import DropDown from '../../admin-navbar/drop-down';

const {
  userLogout,
} = userHelper;

const {
  searchAny,
  searchAll,
} = search;
class LandingHeader extends Component {
  constructor(){
    super();
    this.state={
      searchedItem : '',
      allProducts: [],
      token: '',
      loggedInUser:{},
      clicked:false,
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = this.props;
    const searchData = {
      search: this.state.searchedItem,
    };
      search(searchData);
  };
  handleEnterPress = event => {
    event.preventDefault();
    const { search } = this.props;
    const data = {
      search: this.state.searchedItem,
    };
      search(data);
  };
  handleSubmitAll = (e) => {
    e.preventDefault();
    const { searchAllProducts } = this.props;
      searchAllProducts();
  };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  handleHover = () => {
    this.setState({
      clicked: true,
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

  componentWillReceiveProps = (nextProps) => {
    const {searchAllProducts} = this.props;
    let alertMessage='';
    if(nextProps.searchErrors){
      searchAllProducts();
    }
    alertMessage = (nextProps.searchErrors && toast.error('The product is not available'));
    return !nextProps.loading && alertMessage;
  };
  componentDidMount(){
    const {searchAllProducts, data} = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({loggedInUser:user});
    if(data.length === 0){
      searchAllProducts();
    }
  }

  render(){
    const localToken = localStorage.getItem('token');
    const visibility = this.state.clicked === true ?'visible':'hidden';
    if(!this.props.loadingLogout && this.props.messageLogout){
      this.props.history.go('/');
    }
    return (
      <div style={{fontFamily:'Montserrat'}}>
        <ToastContainer
          position={toast.POSITION.TOP_CENTER}
          className='toastMessages'
          style={{ width: '750px' }}
        />        
        <div className='grid-container'>
          <div className='grid-item logo'>
            <h4>RICA INC</h4>
            <h4>LOGO</h4>
          </div>
          <div className='grid-item search'>
            <form className='search-form' onSubmit={this.handleEnterPress}>
              <span className='all'><span onClick={this.handleSubmitAll}>ALL</span><div className = "vertical"></div></span>
              <input
                name='searchedItem'
                type='text'
                className='search-input'
                placeholder='search'
                onChange={this.handleChange}
                value={this.state.searchedItem}
              ></input>
              <span className="icon" onClick={this.handleSubmit}><FontAwesomeIcon icon={faSearch}/></span>
            </form>
          </div>
          <div className='grid-item language' style={{visibility:(!localToken)?'visible':'hidden'}}>
            <a href="https://ricainc.co.com/">ENG | </a>
            <a href="https://kiny.ricainc.co.com/">KINYA | </a>
            <a href="https://fr.ricainc.co.com/">FRAN</a>
          </div>
            {(!localToken)?
            (<div className='grid-item'><Link to='/signup'>Signup | </Link>
             <Link to='/login'>Login</Link></div>):
             (<div className='grid-item'><Link to='/displayclientorders'> My Orders &nbsp;&nbsp;</Link>
            <Link to='' onClick={this.handleLogout}> Logout</Link></div>)}
          <div className='grid-item navbar'>
            <Link to='/'>Home</Link>
            <Link to='#'>Videos</Link>
            <span style={{fontWeight:'500'}} onClick={this.handleClick}>Consultant</span>
            <Link to='/displaynews'>News</Link>
            {this.state.loggedInUser?(this.state.loggedInUser.type ==='admin'?<Link to='/addproduct'>Admin</Link>:null):null}
            <DropDown 
            visibility={visibility} 
            details={['design','study']}
            hover={this.handleHover}
            unHover={this.handleUnHover}
            coordinates={49}
            home={true}
            action='display'
          />
          </div>
      </div>
      </div>
    )
  }
}
LandingHeader.propTypes = {
  message: PropTypes.string
};
const mapStateToProps = (state) => {
  // console.log('logou',state.userLogout.message)
  return {
  token:state.search.token,
  loading:state.search.loading,
  searchErrors:state.search.searchErrors,
  message:state.search.message,
  data:state.search.data,
  loadingLogout:state.userLogout.loading,
  messageLogout:state.userLogout.message,
  userLogoutErrors:state.userLogout.userErrors
}};
export default connect(mapStateToProps,{search:searchAny, searchAllProducts:searchAll, userLogout:userLogout})(withRouter(LandingHeader));