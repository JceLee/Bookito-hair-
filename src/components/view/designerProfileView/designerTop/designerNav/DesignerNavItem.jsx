import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const getWindowDimensions = () => {
  const { innerWidth: width } = window;
  return {
    width,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

const DesignerNavItem = (props) => {
  let { height, children } = props;
  const { width } = useWindowDimensions();
  if (children === 'Home') {
    height += 64;
    if (width <= 480) {
      // console.log('Removed "Home" tap from nav links.');
      children = null;
    }
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
        offset={height * -2.25}
      >
        {children}
      </Link>
    </li>
  );
};

export default DesignerNavItem;
