import React,{Component} from 'react';
import {connect} from 'react-redux';
import './landingLeftSide.css';
import search from '../../../actions/landing/search';
import sidebar from '../../../actions/landing/sidebar';
import Spinner from './spinner/Spinner';

const {
  searchAny,
} = search;
const {
  displaySidebar,
  displayBestProducts,
} = sidebar;

class LandingLeft extends Component{
  constructor(){
    super();
    this.state={
      allProducts:[],
    }
  }
  componentDidMount(){
    const {sidebar, displayBestProducts, bestProducts} = this.props;
    if(bestProducts.length === 0){
      sidebar();
      displayBestProducts();
    }
  }
  handleClick = (data) => {
    const {search} = this.props;
    const searchData = {
      search:data,
    }
    search(searchData);
  }
  render(){
    const {loading, data, bestProducts} = this.props;
    const uniqueData = data.map(dt=>(dt.category));
    const uniqueDataBrand = data.map(dt=>(dt.brand));
    const textColor = loading?'#f0f0f0e7':'#000000';
    return(
      <div style={{fontFamily:'Montserrat'}}>
        <div className='available-list' style={{backgroundColor:!loading?'#f0f0f0e7':'white'}}>
          <h5 style={{color:textColor}}>Categories</h5>
          <ul>
            {!loading&&data.length!==0 ? [...new Set(uniqueData)].map(
              dt=><li onClick={()=>{this.handleClick(dt)}} key={dt}>{dt}</li>):<Spinner/>}
          </ul>
          <h5 style={{color:textColor}}>Company</h5>
          <ul>
            {!loading&&data.length!==0 ? [...new Set(uniqueDataBrand)].map(
              dt=><li onClick={()=>{this.handleClick(dt)}} key={dt}>{dt}</li>):<Spinner/>}
          </ul>
          <h5 style={{color:textColor}}>Best Products</h5>
          <ul>
            {!loading&&bestProducts.length!==0 ? bestProducts.map(
              dt=><li onClick={()=>{this.handleClick(dt.name)}} key={dt.id}><strong>{dt.name} : {dt.price}</strong></li>):<Spinner/>}
          </ul>
        </div>        
      </div>
    )
  }
}
const mapStateToProps= (state) =>(
 {
  loading:state.sidebar.loading,
  searchErrors:state.sidebar.searchErrors,
  message:state.sidebar.message,
  data:state.sidebar.data,
  bestProducts:state.bestProducts.bestProducts,
}
);
export default connect(mapStateToProps,{search:searchAny, sidebar:displaySidebar, displayBestProducts: displayBestProducts})(LandingLeft);