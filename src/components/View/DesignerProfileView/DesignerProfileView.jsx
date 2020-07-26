import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DesignerTop from './DesignerTop/DesignerTop.jsx';
import DesignerBottom from './DesignerBottom/DesignerBottom.jsx';

const designer = {
  fname: 'John',
  lname: 'Doe',
  location: 'BCIT Downtown Campus, Seymour Street, Vancouver, BC',
  rating: '★★★★★',
  img: 'https://via.placeholder.com/100',
};

const DesignerProfileView = (getProfileById, match) => {
  return (
    <BrowserRouter>
      <div className='designerProfileView'>
        <DesignerTop
          fname={designer.fname}
          lname={designer.lname}
          location={designer.location}
          rating={designer.rating}
          img={designer.img}
        />
        <DesignerBottom
          path={`/designer_profile/${designer.fname.toLowerCase()}_${designer.lname.toLowerCase()}/`}
          location={designer.location}
        />
        {/* <DesignerTop
          name={props.name}
          gender={props.gender}
          rate={props.rate}
          Location={props.Location}
          img={props.img}
          service={props.service}
        />
        <DesignerBottom
          path={`/designer_profile/${props.name}/`}
          Location={props.Location}
        /> */}
      </div>
    </BrowserRouter>
  );
};

export default DesignerProfileView;
