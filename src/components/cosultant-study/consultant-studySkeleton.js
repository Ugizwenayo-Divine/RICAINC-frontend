import React from 'react';
import Skeleton from "react-loading-skeleton";
import './consultant-study.css';

const skeleton = () => {
    return (
      <div className='container'>
          <div className='study'>
          <div className='study-image'>
              <div style={{width:'100%',height:'100%'}}>
                <Skeleton height={450} width={1100} />
                  <div style={{width:'100%', marginTop:'4%', marginBottom:'2%'}}>
                    <div style={{width:'100%', marginLeft:'0',margin:'auto'}}>
                    <h4 style={{color:'#f0f0f0e7'}}>Description <i className='fas fa-info-circle' style={{color:'#f0f0f0e7'}}></i></h4>
                      <Skeleton height={10} width={800} />
                      <Skeleton height={10} width={800} />
                    </div>
                    <hr/>
                  </div>          
              </div>
              </div>
              </div>
        </div>)
}
export default skeleton;

