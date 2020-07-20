import React from 'react';
import classes from './DesignerNavItem.module.css';
import { Link } from 'react-router-dom';

const DesignerNavItem = (props) => (
  <li className={classes.DesignerNavItem}>
    <Link to={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </Link>
  </li>
);

export default DesignerNavItem;
