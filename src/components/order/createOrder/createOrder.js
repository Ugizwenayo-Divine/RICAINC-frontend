import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {Redirect} from 'react-router-dom';
import Select from 'react-select';
import {addOrder} from '../../../actions/order';
import ProductOrder from '../productOrder/productOrder';
import ClietNavbar from '../../admin-navbar/client-navbar';
import AdminNavbar from '../../admin-navbar/admin-navbar';
import transportActions from '../../../actions/transport/transportActions';
import sectorActions from '../../../actions/transport/sectorActions';
import bonusActions from '../../../actions/bonus/bonusActions';
// import Map from '../../map/map';
import './createOrder.css';

const{
  displayTransport
} = transportActions;
const{
  getAllByDistrict,
  getAllSectors,
}= sectorActions;
const {
  displayBonus,
  checkBonus,
} = bonusActions;
class CreateOrders extends Component {
  constructor(){
    super();
    this.state={
      quantity:0,
      payment_options:'',
      visible:false,
      order:{},
      user:{},
      district:'',
      sector:'',
      price:'',
      bonus:'',
      location:'',
    }
    this.loca=null;
  }
  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user:user});
    this.props.displayTransport();
    this.props.getAllSectors();
    this.props.displayBonus();
    this.props.checkBonus();
  }
	componentWillReceiveProps = (nextProps) => {
    if(!this.props.loading && this.props.data){
      // const user = JSON.parse(localStorage.getItem('user')); 
      this.setState({order:this.props.data?this.props.data:null});
    }   
    const alertMessage =
      (nextProps.orderErrors && toast.error(nextProps.orderErrors));

    return !nextProps.loading && alertMessage;
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSelection = (event) => {
    this.setState({
      payment_options: event.value,
    });
    console.log('thisdis',this.state);
  };
  handleBonusSelection = (event) => {
    this.setState({
      bonus: event.target.value,
    });
  };
  handleDistrict = (event) => {
    console.log(event,event.target.options[event.target.selectedIndex].text,event.target.value,'eve')
    this.setState({
      district: event.target.options[event.target.selectedIndex].text,
      price:parseInt(event.target.value.split(' ')[0])
    });
    this.props.getAllByDistrict(parseInt(event.target.value.split(' ')[1]));
  }
  
  handleSector = (event) => {
    this.setState({
      sector: event.target.options[event.target.selectedIndex].text,
    });
  }
  handleLocation = (event) => {
    this.setState({
      location: event.target.value,
    });
    console.log(this.state,'lloo')
  };
  viewProductOrder=() =>{
    this.setState({visible:!this.state.visible});
  }
  submitOrder = (event,product) =>{
    event.preventDefault();
    const {addOrder} = this.props;
    const data={
      productId: product.id,
      quantity: this.state.quantity,
      payment_options: this.state.payment_options,
      bonus:this.state.bonus?this.state.bonus:null,
      deliveredDistrict:{
        district:this.state.district,
        price:this.state.price
      },
      deliveredSector:this.state.sector,
      deliveredLocation:this.state.location
    }
    console.log('real data',data);
    addOrder(data);
    
    this.setState({visible:true});
  }
  cancelOrder = () =>{
    this.props.history.push('/');
  }
  render (){
    const {districts,sectors,bonuses} = this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to='/login'/>
    }
    if (!this.props.location.state) {
      return <Redirect to='/'/>
    }
    const {product}=this.props.location.state;
    const options = [
      { value: 'card', label: 'card' },
      { value: 'momo', label: 'momo' }
    ];
    const bonusStyle = ((this.state.quantity * product.price.split(' ')[0])>1000000)|| this.props.allowed ?({visibility:'visible'}):({visibility:'hidden',height:'0'})
    return (
        <div>
        {this.state.user.type === 'client'?<ClietNavbar />:null}
				<div id='layout'>
        <div className='container'>
        {this.state.user.type === 'admin'?<AdminNavbar />:null}
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            className='toastMessages'
            style={{ width: '750px' }}
          />
          <div className='card-form order-form'>
            <div className='card-header'>
              <h3 className='text-center font-weight-light my-4'>
                Order the product
              </h3>
            </div>
            <div className='card-body col-md-offset-3' style={{height:'auto'}}>
              <form onSubmit={this.handleSubmit} style={{height:'100%'}}>
              <div className='card-field'>
                <div className='col-md-9'>
                    <label className='large mb-1'>Product</label>
                    <input
                      name='product'
                      className='form-control py-2'
                      value={product.name}
                      readOnly
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className='col-md-9'>
                    <label className='large mb-1'>Price</label>
                    <input
                      name='price'
                      className='form-control py-2'
                      value={product.price}
                      readOnly
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className='col-md-9'>
                    <label className='large mb-1'>Quantity</label>
                    <input
                      name='quantity'
                      className='form-control py-2'
                      placeholder='Enter quantity to order'
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className='col-md-9'>
                    <label className='large mb-1'
                    >Payment_options</label>
                      <Select options={options} onChange={this.handleSelection}/>
                    
                  </div>
                  <div className='col-md-9'
                    style={bonusStyle}  
                  >
                    <label className='large mb-1'
                    >Bonus</label>
                      <select className="custom-select" onChange={this.handleBonusSelection}>
                        <option defaultValue>Choose...</option>
                        {bonuses? bonuses.map(dt=>(<option key={dt.id} value={dt.name}>{dt.name}</option>)):null}
                      </select>
                    
                  </div>
                  <div className='col-md-9'>
                    <label className='large mb-1'
                    >District</label>
                      <select className="custom-select" onChange={this.handleDistrict}>
                        <option defaultValue>Choose...</option>
                        {districts? districts.map(dt=>(<option key={dt.id} value={dt.price+" "+dt.id}>{dt.district}</option>)):null}
                      </select>                    
                  </div>
                  <div className='col-md-9'>
                  <label className='large mb-1'>Sector</label>
					<select className="custom-select" onChange={this.handleSector}>
						<option defaultValue>Choose...</option>
            {sectors? sectors.map(dt=>(<option key={dt.id} value={dt.id}>{dt.sector}</option>)):null}
					</select>
                    
                  </div>
                  <div className='col-md-9'>
                    <label className='large mb-1'>Neighbourhood</label>
                    <input
                      name='quantity'
                      className='form-control py-2'
                      placeholder='Enter your neighbourhood'
                      onChange={this.handleLocation}
                    ></input>
                  </div>
                  </div>
                {/* <br /> */}
                
                {/* <div style={{width:'auto', height:'350px', marginLeft:'2%', marginRight:'auto', marginBottom:'5%'}}>
                    <label className='large mb-1'
                    >Choose the location</label>
                    <Map onChange={this.handleLocation}/>
                  </div> */}
                  {/* <div> */}
                <div className='form-group order-button'>
                  <button className='btn btn-secondary col-md-5' 
                    onClick={(event)=>{this.submitOrder(event,product)}}
                    disabled={this.state.quantity && this.state.payment_options && this.state.district && this.state.sector && this.state.location ? false :true}
                    
                  >

                    Order
                  </button>
									<button className='btn btn-danger col-md-5' onClick={this.cancelOrder}>
                    cancel
                  </button>
                </div>
                {/* </div> */}
              </form>
            </div>
          </div>
          <div style={{visibility:this.state.visible}}>
        <ProductOrder 
          visible={this.state.visible} 
          order={this.state.order}
          transportCost={this.state.price}
          bonus={this.state.bonus}
          user={this.state.user}
          product={product}
          clicked={this.viewProductOrder} />
          </div>
        </div>
      </div>
      </div>
    )
    
	}
}
const mapStateToProps = ({createOrder:{loading,orderErrors,data,message},transport:{districts},sector:{sectors},displayBonus:{bonuses}, allowedBonus:{allowed}}) => {
  return {
    loading,
    orderErrors,
    data,
    message,
    districts,
    sectors,
    bonuses,
    allowed,    
  }
}
 export default connect (mapStateToProps,{
   addOrder:addOrder,
   displayTransport,
   getAllByDistrict,
   getAllSectors,
   displayBonus,
   checkBonus,
  })(CreateOrders);