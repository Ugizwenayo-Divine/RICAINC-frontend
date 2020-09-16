import React from 'react';
import Skeleton from "react-loading-skeleton";
import './landingMiddle.css';

const skeleton = () =>{
    return (

      <div className='skeleton' 
        style={
          {
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)', 
            gridColumnGap:'3px',
            border:'1px #f0f0f0e7 solid', 
            paddingLeft:'8px',paddingRight:'10px', 
            marginTop:'-10px',
          }
        }
      >
        <div><Skeleton  height={250} width={250}/></div>
        <div><Skeleton  height={250} width={250}/></div>
        <div><Skeleton  height={250} width={250}/></div>
        <div><Skeleton  height={250} width={250}/></div>
        <div><Skeleton  height={250} width={250}/></div>
        <div><Skeleton  height={250} width={250}/></div>
        <div><Skeleton  height={250} width={250}/></div>
        <div><Skeleton  height={250} width={250}/></div>
        <div><Skeleton  height={250} width={250}/></div>
      </div>
    )
}
export default skeleton;