import React from 'react';
import Skeleton from "react-loading-skeleton";
import './ricaAdvertisement.css';

const prototype = () =>{
    return (
        <div className='advertisement'>
        <div className='inner'>
          <div className='content'>
            <h2><Skeleton height={30} width={200}/></h2>
            <h4>
              <Skeleton height={20} width={500}/>
              <Skeleton height={20} width={500}/>
              <Skeleton height={20} width={500}/>
            </h4>
            <br/>
            <br/>
            {/* <p><Skeleton height={10} width={200}/></p> */}
          </div>
          <div className='imageSke'>
            <Skeleton  height={160} width={200}/>
          </div>
        </div>
      </div>
    )
}
export default prototype;