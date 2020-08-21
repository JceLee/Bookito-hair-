import React from 'react';

export default function DesignerCardTopRight(props) {
  const { services } = props;
  console.log(typeof services);
  console.log(services);
  return (
    <div className='designerCardTopRight'>
      <div className='designerCardTopRightTypes'>
        {services &&
          services.map((service, index) => (
            <span key={index} className='designerCardTopRightType'>
              {service}
            </span>
          ))}
      </div>
    </div>
  );
}
