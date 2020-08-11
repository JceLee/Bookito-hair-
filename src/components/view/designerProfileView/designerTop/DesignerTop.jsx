import React, { useState, useEffect } from 'react';

import { Affix, Button } from 'antd';
import DesignerNav from './designerNav/DesignerNav.jsx';
import RatingSymbol from '../RatingSymbol.jsx';

const DesignerTop = (props) => {
  const [top] = useState(48);
  const [height, setHeight] = useState(0);
  const { fname, lname, img, totalRate, location } = props;
  console.log(height);

  useEffect(() => {
    setHeight(document.getElementById('designerTop').clientHeight);
  }, [height]);

  return (
    <Affix offsetTop={top}>
      <div className='designerTop' id='designerTop'>
        <img className='profileImage' src={img} alt='profileImage' />
        <h2>
          {fname} {lname}
        </h2>
        <RatingSymbol rate={totalRate} />
        <p>{location}</p>
        <Button className='Button' type='primary' shape='round'>
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
