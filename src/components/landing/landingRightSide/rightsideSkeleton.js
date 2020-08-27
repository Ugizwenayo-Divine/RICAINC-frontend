import React from 'react';
import Skeleton from "react-loading-skeleton";
import './landingRightSide.css';

const skeleton = () =>{
    return (

      <div className='one-announcement'>
          <div style={
              {
                  marginBottom:'10px',
              }
          }><Skeleton  height={30} width={150}/></div>
        <div><Skeleton  height={10} width={220}/></div>
        <div><Skeleton  height={10} width={220}/></div>
        <div><Skeleton  height={10} width={220}/></div>
      </div>
    )
}
export default skeleton;