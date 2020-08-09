import React from 'react';

import Home from './Home.jsx';
import Activity from './Activity.jsx';
import Bio from './Bio.jsx';
import Works from './Works.jsx';
import ServiceNPrice from './ServiceNPrice.jsx';
import Hours from './Hours.jsx';
import Location from './Location.jsx';
import Reviews from './Reviews.jsx';
import { Divider } from 'antd';

const DesignerBottom = (props) => {
  const {
    fname,
    location,
    activity,
    bio,
    works,
    serviceNPrices,
    hours,
    reviews,
  } = props;

  return (
    <div className='designerBottom'>
      <Home id='Home' />
      <div className='activityNBioGrid'>
        <div className='activityGrid'>
          <Activity fname={fname} activity={activity} />
          <Divider />
        </div>
        <div className='bioGrid'>
          <Bio bio={bio} />
          <Divider />
        </div>
      </div>
      <Works id='Works' works={works} />
      <Divider />
      <div className='serviceNPriceHoursGrid'>
        <div className='serviceNPriceGrid'>
          <ServiceNPrice id='Price' serviceNPrices={serviceNPrices} />
          <Divider />
        </div>
        <div className='hoursGrid'>
          <Hours id='Hours' hours={hours} />
          <Divider />
        </div>
      </div>
      {/* <ReviewsContainer id='Reviews' reviews={reviews} /> */}
      <Reviews id='Reviews' reviews={reviews} />
      <Divider />
      <Location id='Location' location={location} />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
    </div>
  );
};

export default DesignerBottom;
