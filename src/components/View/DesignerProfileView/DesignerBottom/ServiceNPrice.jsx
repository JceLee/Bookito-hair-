import React from 'react';

const ServiceNPrice = (props) => {
  const serviceNPrices = [
    { service: 'Male Hair cut', price: '$30' },
    { service: 'Female Hair cut', price: '$40' },
    { service: 'Styling', price: '$50' },
    { service: 'Perm', price: '$100' },
    { service: 'Male Hair dying', price: '$30' },
    { service: 'Female Hair dying', price: '$40' },
    { service: 'Styling2', price: '$50' },
  ];
  return (
    <>
      <div className='serviceNPrice' id={props.id}>
        <h2>Service & Price</h2>
        <table>
          <tbody>
            {serviceNPrices.map((serviceNPrice, index) => {
              return (
                <tr key={index}>
                  <td>{serviceNPrice.service}</td>
                  <td>{serviceNPrice.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ServiceNPrice;
