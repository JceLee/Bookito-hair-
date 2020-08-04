import React from 'react';
import PropTypes from 'prop-types';

//Create card form
const Card = ({ property }) => {
  const { index, picture, city, address, price } = property;
  return (
    <div id={`card-${index}`} className='card'>
      <img src={picture} alt={city} />
      <div className='details'>
        <span className='index'>{index + 1}</span>
        <p className='location'>
          {city}
          <br />
          {address}
          <br />
          {price}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Card;
