import React from 'react';
import Skeleton from "react-loading-skeleton";

const skeleton = () => {
    return (
      <div className='skeletonContainer'>
          <Skeleton width={244} height={230} className='DesignList'/>
          <Skeleton width={244} height={230} className='DesignList'/>
          <Skeleton width={244} height={230} className='DesignList'/>
          <Skeleton width={244} height={230} className='DesignList'/>
          <Skeleton width={244} height={230} className='DesignList'/>
          <Skeleton width={244} height={230} className='DesignList'/>
          <Skeleton width={244} height={230} className='DesignList'/>
          <Skeleton width={244} height={230} className='DesignList'/>
        </div>)
}
export default skeleton;

