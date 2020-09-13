import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import AdminNavbar from '../admin-navbar/admin-navbar';
import designActions from '../../actions/design/addDesign';
import DesignSkeleton from './display-designSkeleton';
import ClientNavbar from '../admin-navbar/client-navbar';
import MainNavbar from '../admin-navbar/main-navbar';

const {
  displayDesign,
  deleteDesign
} = designActions;

class AllDesign extends Component{
  constructor(){
    super();
    this.state={
      user:{},
    }
  }
  handleDelete(id){
    const {deleteDesign} = this.props;
    deleteDesign(id);
  }
  handleUpdate = (pathToMyComponent, data) => {
    console.log('dataaa',data);
    const token = localStorage.getItem('token');
    if(token === undefined || token === ' ' || token === null){
      return alert('not logged in');      
    }
    else{
      this.props.history.push({
        pathname: pathToMyComponent,
        state: {design: data}
      });
    }
  }
  componentWillReceiveProps(nextProps){
    // const {deleteLoading, deleteMessage}=this.props;
    // if(!deleteLoading && deleteMessage){
    //   window.location.reload();
    // }
    const alertMessage =
    (nextProps.designErrors && toast.error(nextProps.designErrors));

  return !nextProps.loading && alertMessage;    
  }
  componentDidMount(){
      const {getAll} = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});
      getAll();
  }
  render (){
    const {loading, data }=this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to='/login'/>
    }
    return (
      <div style={{width:'100%'}}>
      {this.state.user?(this.state.user.type !== 'admin'?(<ClientNavbar/>):null):null}
        <div className='container'>
        <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '700px' }}
          />
      {this.state.user?(this.state.user.type === 'admin'?(<AdminNavbar />):null):<MainNavbar/>}
        <div className='table-responsive-md'  style={{marginTop:'5.8%'}}>
          <nav className="navbar navbar-light" style={{width:'100%', marginLeft:'0%'}}>
            <h4 style={{color:'#8f8d8d',fontFamily:'Montserrat'}}>All Designs</h4>
          </nav>
            <div className='container'>
              {((!loading && data) ? data.map((dt)=>
              <div className="card" key={dt.id} style={{width: '100%',marginBottom:'1%'}}>
                <div className='form-row'>
              <div className="card-body col-md-8" style={{marginLeft:'5%'}}>
                <div className="card-title">
                <h5 >Rica design</h5>
                </div>
                <div className="card-text" style={{
                  marginBottom:'2%',
                  height:'48%',
                  overflowX: 'hidden',
                  overflowY: 'scroll'
                }}>{dt.description}</div>
                {this.state.user?(this.state.user.type === 'admin' ? <div style={{marginBottom:'-5'}}>
                <button 
                className="btn btn-outline-secondary my-2 my-sm-0 mr-sm-2"
                onClick={()=>{this.handleUpdate('/updatedesign',dt)}}
                type="button">UPDATE</button>
                <button 
                className="btn btn-outline-danger my-2 my-sm-0"
                type="button"
                onClick={()=>{this.handleDelete(dt.id)}}
                >DELETE</button>
                </div>:null):null}
              </div>
              <div className='col-md-3' >
                      <img alt='' src={dt.image} style={{height:'170px', marginTop:'5%'}} />
                </div>
                </div>
              </div>):<DesignSkeleton/>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({
    displayDesign: { loading, designErrors, message, data }
  }) => ({
    loading,
    designErrors,
    message,
    data,
  });
export default connect(mapStateToProps,{getAll:displayDesign, deleteDesign:deleteDesign})(AllDesign);