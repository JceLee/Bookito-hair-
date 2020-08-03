import React from 'react';

const RatingSymbol = (props) => {
  let symbolImage = '';
  if (props.rate === 5.0) {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_5.0.png';
  } else if (props.rate >= 4.5) {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_4.5.png';
  } else if (props.rate >= 4.0) {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_4.0.png';
  } else if (props.rate >= 3.5) {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_3.5.png';
  } else if (props.rate >= 3.0) {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_3.0.png';
  } else if (props.rate >= 2.5) {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_2.5.png';
  } else if (props.rate >= 2.0) {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_2.0.png';
  } else if (props.rate >= 1.5) {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_1.5.png';
  } else if (props.rate >= 1.0) {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_1.0.png';
  } else if (props.rate >= 0.5) {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_0.5.png';
  } else {
    symbolImage = '/images/5_star_rating_system/5_Star_Rating_System_0.0.png';
  }

  return (
    <div className='RatingSymbol'>
      <img src={symbolImage} alt='' />
    </div>
  );
};

export default RatingSymbol;
