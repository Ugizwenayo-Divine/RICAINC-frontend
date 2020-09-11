import React from 'react';
import Skeleton from "react-loading-skeleton";
import './consultant-study.css';

const skeleton = () => {
    return (
      <div className='container'>
          <div className='study'>
          <div className='study-image'>
              <div style={{width:'100%',height:'100%'}}>
                <Skeleton height={580} width={1100} />
                  <div style={{width:'100%', display:'inline-flex', marginTop:'4%', marginBottom:'2%'}}>
                    <div style={{width:'40%', marginLeft:'0',margin:'auto'}}>
                      <Skeleton height={20} width={300} />
                    </div>
                    <div style={{
                      width:'50%', 
                      marginLeft:'auto',
                      marginRight:'2%'
                    }}>
                      <Skeleton height={10} width={500} />
                      <Skeleton height={10} width={500} />
                      <Skeleton height={10} width={500} />
                      <Skeleton height={10} width={500} />
                    </div>
                  </div>          
              </div>
              </div>
              </div>
        </div>)
}
export default skeleton;

