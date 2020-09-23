import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AdminNavbar from '../admin-navbar/admin-navbar';
import transportActions from '../../actions/transport/transportActions';
// import DeleteChecker from '../deleteChecker/deleteChecker';

const { displayTransport,updateTransport } = transportActions;




class UpdateTransport extends Component{
  constructor(){
    super();
    this.state={
      district:'',
      price:'',
    }
  }
  handlePrice = (event) => {
    event.preventDefault();
    this.setState({
      price: event.target.value,
    });    
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      district:event.target.options[event.target.selectedIndex].text,
      price: event.target.value,
    });
  };
  
  handleUpdate=(event)=>{
    event.preventDefault();
    const name=this.state.district;
    const data={
      price:this.state.price,
    }
    this.props.updateTransport(name,data);
  }
  componentDidMount(){
    const transport=this.props.location.state?this.props.location.state.transport:null;
    this.props.displayTransport();
    this.setState({
      district:transport?transport.district:'',
      price:transport?transport.price:''
    })
  }
  componentWillReceiveProps(nextProps){
    const alertMessage =
    (nextProps.message && toast.success(nextProps.message)) ||
    (nextProps.transportErrors && toast.error(nextProps.transportErrors));

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
                <h3 className='text-center font-weight-light my-4'>Transport</h3>
              </div>
              <div className='body'>
                <form className='form-group' onSubmit={this.handleUpdate}>
                  <label className='small mb-1'>District</label>
                    <select className="custom-select" onChange={this.handleChange}>
                      <option value={this.state.district} defaultValue>{this.state.district?this.state.district:'choose....'}</option>
                      <option defaultValue>Choose...</option>
                        {this.props.districts? this.props.districts.map(dt=>(<option key={dt.id} value={dt.price}>{dt.district}</option>)):null}
                    </select>
                  <br></br>
                    <label for="type">Price</label>
                  <input
                    name='price'
                    type='text'
                    value={this.state.price}
                    placeholder='Enter the new price'
                    className='form-control py-2'
                    onChange={this.handlePrice}
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
const mapStateToProps = ({transport:{districts},updateTransport:{message,loading,transportErrors}}) =>{
  return{
    districts,
    message,
    loading,
    transportErrors
  }
}
export default connect(mapStateToProps,{displayTransport, updateTransport})(UpdateTransport);