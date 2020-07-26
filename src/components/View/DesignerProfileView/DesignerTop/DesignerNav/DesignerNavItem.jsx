import React from 'react';

const DesignerNavItem = (props) => {
  return (
    <div className='designerNavItem'>
      <li>
        <a href={`#${props.children}`}>{props.children}</a>
      </li>
    </div>
  );
};

export default DesignerNavItem;
