import React, { useState, useEffect } from 'react';

import { Affix, Button } from 'antd';
import DesignerNav from './DesignerNav/DesignerNav.jsx';
import RatingSymbol from '../RatingSymbol.jsx';

const DesignerTop = (props) => {
  const [top] = useState(64);
  const [height, setHeight] = useState(0);
  const { fname, lname, img, totalRate, location } = props;

  useEffect(() => {
    setHeight(document.getElementById('designerTop').clientHeight);
  }, [height]);

  return (
    <Affix offsetTop={top}>
      <div className='designerTop' id='designerTop'>
        <img
          className='photo'
          src={img}
          alt='profilePhoto'
          width='100'
          height='100'
        />
        <div className='info'>
          <h2>
            {fname} {lname}
          </h2>
          <RatingSymbol rate={totalRate} />
        </div>
        <div>{location}</div>
        <Button className='Button' type='primary'>
          Book Now
        </Button>
        <DesignerNav
          path={`${fname.toLowerCase()}_${lname.toLowerCase()}`}
          height={height}
        />
      </div>
    </Affix>
  );
};

export default DesignerTop;
