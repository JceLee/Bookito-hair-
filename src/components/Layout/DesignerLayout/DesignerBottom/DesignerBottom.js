import React, { Fragment } from 'react';

import { Row, Col, Divider } from 'antd';
import classes from './DesignerBottom.module.css';
import Works from './Works/Works';
import Price from './Price/Price';
import Hours from './Hours/Hours';
import Location from './Location/Location';
import Reviews from './Reviews/Reviews';

const DesignerBottom = (props) => (
  <Fragment>
    <div className={classes.DesignerBottom}>
      <Works />

      <Row gutter={[16, 24]}>
        <Col className='gutter-row' span={12}>
          <Price />
        </Col>
        <Col className='gutter-row' span={12}>
          <Hours />
        </Col>
        <Col className='gutter-row' span={12}>
          <Location location={props.location} />
        </Col>
        <Col className='gutter-row' span={12}>
          <Reviews />
        </Col>
      </Row>
    </div>
  </Fragment>
);

export default DesignerBottom;
