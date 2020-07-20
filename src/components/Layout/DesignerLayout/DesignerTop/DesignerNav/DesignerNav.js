import React from 'react';

import classes from './DesignerNav.module.css';
import DesignerNavItem from './DesignerNavItem/DesignerNavItem';

const DesignerNav = (props) => (
  <div className={classes.DesignerNav}>
    <DesignerNavItem link={`/designers/${props.path}`}>Home</DesignerNavItem>
    <DesignerNavItem link={`/designers/${props.path}/works`}>
      Works
    </DesignerNavItem>
    <DesignerNavItem link={`/designers/${props.path}/price`}>
      Price
    </DesignerNavItem>
    <DesignerNavItem link={`/designers/${props.path}/hours`}>
      Hours
    </DesignerNavItem>
    <DesignerNavItem link={`/designers/${props.path}/location`}>
      Location
    </DesignerNavItem>
    <DesignerNavItem link={`/designers/${props.path}/reviews`}>
      Reviews
    </DesignerNavItem>
  </div>
);

export default DesignerNav;
