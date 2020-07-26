import React from 'react';
import { Link } from 'react-router-dom';

const Designer = (props) => {
  const { name, gender, rate, Location, service } = props;

  return (
    <div className='designer'>
      <h2>
        <Link to={`/designer_profile/${name}/`}>
          {name} ({gender})
        </Link>
      </h2>
      <p>Rate: {rate}</p>
      <p>Location: {Location}</p>
      <p>Service: {service}</p>
    </div>
  );
};

export default Designer;
