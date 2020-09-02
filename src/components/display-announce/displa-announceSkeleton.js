import React from 'react';
import Skeleton from "react-loading-skeleton";

const skeleton = () =>{
    return (

      <div className='container'>
        <div className="card" style={{width: '100%', marginBottom:'1%'}}>
            <div className="card-body">
              <div className="card-title">
              <h5 ><Skeleton  height={25} width={150}/></h5>
              </div>
              <div className="card-text" style={{marginBottom:'1%'}}>
              <Skeleton  height={15} width={800}/><br/>
              <Skeleton  height={15} width={800}/>
              </div>
              <button 
              className="btn my-2 my-sm-0 mr-sm-2"
              type="button"><Skeleton  height={35} width={90}/></button>
              <button 
              className="btn my-2 my-sm-0"
              type="button"><Skeleton  height={35} width={90}/></button>
            </div>
        </div>
        <div className="card" style={{width: '100%', marginBottom:'1%'}}>
            <div className="card-body">
              <div className="card-title">
              <h5 ><Skeleton  height={25} width={150}/></h5>
              </div>
              <div className="card-text" style={{marginBottom:'1%'}}>
              <Skeleton  height={15} width={800}/><br/>
              <Skeleton  height={15} width={800}/>
              </div>
              <button 
              className="btn my-2 my-sm-0 mr-sm-2"
              type="button"><Skeleton  height={35} width={90}/></button>
              <button 
              className="btn my-2 my-sm-0"
              type="button"><Skeleton  height={35} width={90}/></button>
            </div>
        </div>
        <div className="card" style={{width: '100%', marginBottom:'1%'}}>
            <div className="card-body">
              <div className="card-title">
              <h5 ><Skeleton  height={25} width={150}/></h5>
              </div>
              <div className="card-text" style={{marginBottom:'1%'}}>
              <Skeleton  height={15} width={800}/><br/>
              <Skeleton  height={15} width={800}/>
              </div>
              <button 
              className="btn my-2 my-sm-0 mr-sm-2"
              type="button"><Skeleton  height={35} width={90}/></button>
              <button 
              className="btn my-2 my-sm-0"
              type="button"><Skeleton  height={35} width={90}/></button>
            </div>
        </div>
      </div>
    )
}
export default skeleton;