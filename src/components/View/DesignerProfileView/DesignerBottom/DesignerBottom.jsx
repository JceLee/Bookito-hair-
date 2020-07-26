import React from 'react';

import Home from './Home.jsx';
import Works from './Works.jsx';
import ServiceNPrice from './ServiceNPrice.jsx';
import Hours from './Hours.jsx';
import Location from './Location.jsx';
import Reviews from './Reviews.jsx';
import { Divider } from 'antd';

const DesignerBottom = (props) => (
  <div className='designerBottom'>
    {/* <Home id='Home' /> */}
    <Works id='Works' />
    <Divider />
    <div className='serviceNPriceHoursGrid'>
      <div className='serviceNPriceGrid'>
        <ServiceNPrice id='Price' />
        <Divider />
      </div>
      <div className='hoursGrid'>
        <Hours id='Hours' />
        <Divider />
      </div>
    </div>
    <Reviews id='Reviews' />
    <Divider />
    <Location id='Location' location={props.location} />
  </div>
);

export default DesignerBottom;
