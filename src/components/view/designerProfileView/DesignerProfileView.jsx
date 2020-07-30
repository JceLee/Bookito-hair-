import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DesignerTop from './DesignerTop/DesignerTop.jsx';
import DesignerBottom from './DesignerBottom/DesignerBottom.jsx';

const designer = {
  fname: 'John',
  lname: 'Doe',
  location: '111 W Georgia St, Vancouver',
  rating: 3.7,
  img:
    'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
};

const DesignerProfileView = (getProfileById, match) => {
  const ratingSymbolConverter = (rating) => {
    if (rating === 5.0) {
      return '/images/5_star_rating_system/5_Star_Rating_System_5.0.png';
    } else if (rating >= 4.5) {
      return '/images/5_star_rating_system/5_Star_Rating_System_4.5.png';
    } else if (rating >= 4.0) {
      return '/images/5_star_rating_system/5_Star_Rating_System_4.0.png';
    } else if (rating >= 3.5) {
      return '/images/5_star_rating_system/5_Star_Rating_System_3.5.png';
    } else if (rating >= 3.0) {
      return '/images/5_star_rating_system/5_Star_Rating_System_3.0.png';
    } else if (rating >= 2.5) {
      return '/images/5_star_rating_system/5_Star_Rating_System_2.5.png';
    } else if (rating >= 2.0) {
      return '/images/5_star_rating_system/5_Star_Rating_System_2.0.png';
    } else if (rating >= 1.5) {
      return '/images/5_star_rating_system/5_Star_Rating_System_1.5.png';
    } else if (rating >= 1.0) {
      return '/images/5_star_rating_system/5_Star_Rating_System_1.0.png';
    } else if (rating >= 0.5) {
      return '/images/5_star_rating_system/5_Star_Rating_System_0.5.png';
    } else {
      return '/images/5_star_rating_system/5_Star_Rating_System_0.0.png';
    }
  };
  return (
    <BrowserRouter>
      <div className='designerProfileView'>
        <DesignerTop
          fname={designer.fname}
          lname={designer.lname}
          location={designer.location}
          rating={ratingSymbolConverter(designer.rating)}
          img={designer.img}
        />
        <DesignerBottom
          path={`/designer_profile/${designer.fname.toLowerCase()}_${designer.lname.toLowerCase()}/`}
          location={designer.location}
        />
      </div>
    </BrowserRouter>
  );
};

export default DesignerProfileView;
