import React, {Component} from 'react';
import LandingHeader from './landingHeader/landingHeader';
import RicaAdvertisement from './Advertisement/internal/ricaAdvertisement';
import LandingLeftSide from './landingLeftside/landingLeftSide';
import LandingMiddle from './landingMiddle/landingMiddle';
import LandingRightSide from './landingRightSide/landingRightSide';
import LandingFooter from './landingFooter/landingFooter';
import './landing.css';

class Landing extends Component {
  render (){
    return(
      <div className='landing-container'>
        <div className='landing-item head'>
          <LandingHeader/>
        </div>
        <div className='landing-item rica-advert'>
          <RicaAdvertisement/>
        </div>
        <div className='landing-item left'>
          <LandingLeftSide/>
        </div>
        <div className='landing-item middle'>
          <LandingMiddle/>
        </div>
        <div className='landing-item right'>
          <LandingRightSide/>
        </div>
        <div className='landing-item footer'>
          <LandingFooter/>
        </div>
      </div>
    )
  }
}
export default Landing;