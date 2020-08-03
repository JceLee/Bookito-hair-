import React from 'react';

import DesignerNavItem from './DesignerNavItem.jsx';

const NavItems = ['Home', 'Works', 'Price', 'Hours', 'Reviews', 'Location'];
// const NavItems = ['Works', 'Price', 'Hours', 'Reviews', 'Location'];

const DesignerNav = (props) => (
  <div className='designerNav'>
    {NavItems.map((NavItem) => {
      return (
        <DesignerNavItem key={NavItem} height={props.height}>
          {NavItem}
        </DesignerNavItem>
      );
    })}
  </div>
);

export default DesignerNav;
