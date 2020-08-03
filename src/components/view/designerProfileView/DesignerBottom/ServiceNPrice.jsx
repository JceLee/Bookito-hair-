import React from 'react';

const ServiceNPrice = (props) => {
  return (
    <>
      <div className='serviceNPrice' id={props.id}>
        <h2>Service & Price</h2>
        <table>
          <tbody>
            {props.serviceNPrices.map((serviceNPrice, index) => {
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
