import React, { Fragment } from 'react';

import DesignerTop from './DesignerTop/DesignerTop';
import DesignerBottom from './DesignerBottom/DesignerBottom';
import classes from './DesignerLayout.module.css';

const designer = {
  fname: 'John',
  lname: 'Doe',
  location: 'BCIT Downtown Campus, Seymour Street, Vancouver, BC, Canada',
  rating: '★★★★★',
  img: 'https://via.placeholder.com/100',
};

const DesignerLayout = () => (
  <Fragment>
    <div className={classes.DesignerLayout}>
      <DesignerTop
        fname={designer.fname}
        lname={designer.lname}
        location={designer.location}
        rating={designer.rating}
        img={designer.img}
      />
      <DesignerBottom location={designer.location} />
    </div>
  </Fragment>
);

export default DesignerLayout;
