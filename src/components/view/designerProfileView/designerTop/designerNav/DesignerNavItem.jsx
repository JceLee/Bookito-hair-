import React from 'react';
import { Link } from 'react-scroll';

const DesignerNavItem = (props) => {
  let { height, children } = props;
  if (children === 'Home') {
    height += 64
  }
  return (
    <li className='designerNavItem'>
      <Link
        activeClass='active'
        to={`${children}`}
        spy={true}
        smooth={true}
        duration={500}
        // offset={height * -1.75}
        offset={height * -2.5}
      >
        {children}
      </Link>
    </li>
  );
};

export default DesignerNavItem;
