import React from 'react';
import { Link } from 'react-scroll';

const DesignerNavItem = (props) => {
  const { height, children } = props;
  return (
    <li className='designerNavItem'>
      <Link
        activeClass='active'
        to={`${children}`}
        spy={true}
        smooth={true}
        duration={500}
        offset={height * -1.5}
      >
        {children}
      </Link>
    </li>
  );
};

export default DesignerNavItem;
