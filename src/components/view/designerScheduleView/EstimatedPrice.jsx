import React, { useState } from 'react';

export default function EstimatedPrice() {
  const [estimatedPrices, setestimatedPrices] = useState([
    { service: 'Male Hair cut', price: '$30' },
    { service: 'Female Hair cut', price: '$40' },
    { service: 'Kids Hair cut', price: '$10' },
    { service: 'Male Styling', price: '$30' },
    { service: 'Female Styling', price: '$60' },
    { service: 'Kids Styling', price: '$20' },
  ]);

  return (
    <>
      {estimatedPrices.map((estPrice, index) => (
        <div key={index} className='ePrice'>
          <h5>{estPrice.price}</h5>
        </div>
      ))}
    </>
  );
}

// const servicePrices = [
//   { service: 'Male Hair cut', price: '$30' },
//   { service: 'Female Hair cut', price: '$40' },
//   { service: 'Kids Hair cut', price: '$10' },
//   { service: 'Male Styling', price: '$30' },
//   { service: 'Female Styling', price: '$60' },
//   { service: 'Kids Styling', price: '$20' },
// ];

// const EstimatedPrice = () => {
//   return (
//     <>
//       <div className='ePrices'>
//         <h2>Total Estimated price</h2>
//         {servicePrices.map((servicePrice, index) => {
//           return <div key={index}>{servicePrice.price}</div>;
//         })}
//       </div>
//     </>
//   );
// };

// export default EstimatedPrice;
