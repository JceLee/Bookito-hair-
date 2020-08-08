import React from 'react';
import { Link } from 'react-scroll';

const DesignerNavItem = (props) => (
  <li className='designerNavItem'>
    <Link
      activeClass='active'
      to={`${props.children}`}
      spy={true}
      smooth={true}
      duration={500}
      offset={props.height * -1.5}
    >
      {props.children}
    </Link>
  </li>
);

export default DesignerNavItem;
