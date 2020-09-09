import React from 'react';
import Image from 'react-image-resizer';
import './alldesigns.css';

const SingleDesign = (props) =>{
    const style={
      marginLeft:'auto',
      marginRight:'auto',
      marginBottom:'2%',
    }
    return (
      <div className="design-modal" style={{visibility:props.visibility}}>
              <div className='design-modal-content'>
            <span className="close" onClick={props.clicked}>&times;</span>
                <Image src={props.image} width={1200} height={500} style={style}/>
                <br></br>
                <div>
                  <p className='labels'>
                    <strong>Description <i class='fas fa-info-circle'></i></strong>
                  </p>
                  {props.description}
                </div>
              </div>
      </div>
    );
  }
export default (SingleDesign);
