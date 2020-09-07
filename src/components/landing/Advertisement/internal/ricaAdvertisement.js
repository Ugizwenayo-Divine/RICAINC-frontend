import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Image from 'react-image-resizer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import advertisement from '../../../../actions/landing/advertisement';
import './ricaAdvertisement.css';
import Prototype from './ricaPrototype';

const {
  internalAdvertisement,
} = advertisement;
class RicaAdvertisement extends Component{
  constructor(){
    super();
    this.state={
      fetchedAdvertisements:[],
      currentAdvert:'',
      currentAdvertIndex:0,
    }
  }
  componentDidMount(){
    const {internalAdvertisement, advertisements}=this.props;
    if(advertisements.length === 0)
    {
      internalAdvertisement();
    }
  }
  handleNext = () => {
    const {advertisements} = this.props;
    if(this.state.currentAdvertIndex === advertisements.length-1)
    {
      this.setState({currentAdvertIndex:0});
    }
    else{
      this.setState({currentAdvertIndex:this.state.currentAdvertIndex+1});
    }
  }
  handlePrevious = () => {
    const {advertisements} = this.props;
    if(this.state.currentAdvertIndex === 0)
    {
      this.setState({currentAdvertIndex:advertisements.length-1});
    }
    else{
      this.setState({currentAdvertIndex:this.state.currentAdvertIndex-1});
    }
  }
  render (){
    const {advertisements, loading}=this.props;
    const spanColor = loading?'#f0f0f0e7':'#000000';
    const style = {
      image: {
        marginLeft:'auto',
        marginRight:'auto'
      },
    };
    return (
      <div style={{backgroundColor:' #f0f0f0e7',padding:'1% 0'}}>
        <div className='outer'>
              <span className='previous-advert' style={{color:spanColor}} onClick={this.handlePrevious}><FontAwesomeIcon icon={faAngleLeft}/></span>
         {!loading&&advertisements.length>0 ?
          (<div className='advertisement'>
          <div className='inner'>
                <div className='content'>
                  <h2>{advertisements[this.state.currentAdvertIndex].title}</h2>
                  <h4>{advertisements[this.state.currentAdvertIndex].description}</h4>
                  <p>Advertising company: {advertisements[this.state.currentAdvertIndex].advertisingCompany}</p>
                </div>
                <div className='image'>
                  <Image
                    src={`${advertisements[this.state.currentAdvertIndex].image}`}
                    width={180}
                    height={180}
                    style={style.image}
                  />
                </div>
            </div>
          </div>): <Prototype/>}
              <span className='next-advert' style={{color:spanColor}} onClick={this.handleNext}><FontAwesomeIcon icon={faAngleRight}/></span>
          </div>
        </div>
    );
  }
}
RicaAdvertisement.propTypes = {
  message: PropTypes.string
};
const mapStateToProps = ({advertisement}) => {
  return {
  loading:advertisement.loading,
  advertisementErrors:advertisement.advertisementErrors,
  message:advertisement.message,
  advertisements:advertisement.advertisements,
}};
export default connect(mapStateToProps,{internalAdvertisement})(RicaAdvertisement);