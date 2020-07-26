import React, { useState } from 'react';

import { Affix, Button, Divider } from 'antd';
import DesignerNav from './DesignerNav/DesignerNav.jsx';

const DesignerTop = (props) => {
  const [top] = useState(64);
  const { fname, lname, gender, rating, location } = props;

  return (
    <Affix offsetTop={top}>
      <div className='designerTop'>
        <img className='photo' src='https://via.placeholder.com/100' alt='' />
        <div className='info'>
          <h2>
            {fname} {lname}
          </h2>
          <div>{rating}</div>
          {/* <h2>
            {name} ({gender})
          </h2>
          <div>{rate}</div> */}
        </div>
        <div>{location}</div>
        <Button className='Button' type='primary'>
          Book Now
        </Button>
        <DesignerNav path={`${fname.toLowerCase()}_${lname.toLowerCase()}`} />
        {/* <DesignerNav path={`${name}`} /> */}
        <Divider />
      </div>
    </Affix>
  );
};

export default DesignerTop;
