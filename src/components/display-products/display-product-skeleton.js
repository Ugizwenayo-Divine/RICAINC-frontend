import React from 'react';
import Skeleton from "react-loading-skeleton";

const skeleton = () =>{
    return (

      <div className='table-responsive-md container'>
        <table style={{width:'100%'}} className='table table-bordered table-hover table-sm'>
        <thead className='thead-dark'>
          <tr style={{color:'#f0f0f0e7'}}>
            <th>Nº</th>
            <th>Product</th>
            <th>Available Qty</th>
            <th>Unit price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Expires at</th>
            <th>Action</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={200}/></td>              
        </tr>
        <tr>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={200}/></td>               
        </tr>
        <tr>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={200}/></td>               
        </tr>
        <tr>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={200}/></td>                
        </tr>
        <tr>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={200}/></td>               
        </tr>
        <tr>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={200}/></td>                
        </tr>
        <tr>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={80}/></td>
          <td><Skeleton  height={33} width={100}/></td>
          <td><Skeleton  height={33} width={200}/></td>              
        </tr>
        </tbody>
        </table>
    </div>
    )
}
export default skeleton;