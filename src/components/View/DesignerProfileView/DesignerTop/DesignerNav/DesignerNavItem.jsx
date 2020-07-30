import React from 'react';
import { Link } from 'react-scroll';

const DesignerNavItem = (props) => {
  return (
    <div className='designerNavItem'>
      <li>
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
    </div>
  );
};

export default DesignerNavItem;
