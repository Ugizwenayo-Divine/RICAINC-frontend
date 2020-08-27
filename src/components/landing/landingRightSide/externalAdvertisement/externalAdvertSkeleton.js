import React from 'react';
import Skeleton from "react-loading-skeleton";
import './externalAdvertisement.css';

const skeleton = () =>{
    return (

      <div className='one-externalAdverts'>
          <div style={
              {
                  marginBottom:'15px'
              }
          }><Skeleton  height={30} width={100}/></div>
        <div><Skeleton  height={10} width={220}/></div>
        <div><Skeleton  height={10} width={220}/></div>
        <div><Skeleton  height={10} width={220}/></div>
        <div><Skeleton  height={80} width={90}/></div>
      </div>
    )
}
export default skeleton;