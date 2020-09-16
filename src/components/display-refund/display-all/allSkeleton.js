import React from 'react';
import Skeleton from "react-loading-skeleton";

const skeleton = () =>{
    return (

      <div className='table-responsive-md container'>
        <table style={{width:'100%'}} className='table table-bordered table-hover table-sm'>
        <thead className='thead-dark'>
          <tr style={{color:'#f0f0f0e7'}}>
            <th>OrderNumber</th>
            <th>Description</th>
            <th>Requested At</th>
            <th>Requested By</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
      <tbody>
      <tr>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={300}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={180}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={300}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={180}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={300}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={180}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={300}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={180}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={300}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={180}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={300}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={180}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={300}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={135}/></td>
          <td><Skeleton  height={33} width={180}/></td>              
        </tr>
        
        </tbody>
        </table>
    </div>
    )
}
export default skeleton;