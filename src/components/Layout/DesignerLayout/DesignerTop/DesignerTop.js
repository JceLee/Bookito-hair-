import React, { Fragment } from 'react';

import classes from './DesignerTop.module.css';
import DesignerNav from './DesignerNav/DesignerNav';
import { Button } from 'antd';

const DesignerTop = (props) => (
  <Fragment>
    <div className={classes.DesignerTop}>
      <strong>Designer Top</strong>
      <img className={classes.Photo} src={props.img} alt='' />
      <div>{props.rating}</div>
      <div className={classes.Info}>
        {props.fname} {props.lname}
      </div>
      <div>{props.location}</div>
      <Button className={classes.Button} type='primary'>
        Book Now
      </Button>
      <DesignerNav
        path={`${props.fname.toLowerCase()}_${props.lname.toLowerCase()}`}
      />
    </div>
  </Fragment>
);

export default DesignerTop;
