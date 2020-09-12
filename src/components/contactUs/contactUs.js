import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';
// import './landingFooter.css';

const landingFooter = () => {
    return(
        <div className='footer-container'>
            <div className='footer-left'>
                <h4 className='footer-head'>About us</h4>
                <div>RICA incorporation is an electronic shop which does contruction consultation too 
                    <br/>
                    RICA is located in Kigali,KG523</div>
            </div>
            <div className='footer-right'>
            <h4 className='footer-head'>Contact us</h4>
                <p>Tel:+2507893135945</p>
                <p>E:ricainc@gmail.com</p>
                <p>Location:kigali</p>
            </div>
            <div className='footer-social'>
                <div className='facebook'><Link to=''><FontAwesomeIcon icon={faFacebook}/></Link></div>
                <div className='twitter'><Link to=''><FontAwesomeIcon icon={faTwitter}/></Link></div>
                <div className='instagram'><Link to=''><FontAwesomeIcon icon={faInstagram}/></Link></div>
                <hr style={{width:'100%'}}/>
            </div>
            <hr/>
            <div className='footer-copyright'>
                &copy; 2020 RICA INC. All rights reserved.
            </div>
        </div>  
    )
}

export default landingFooter;