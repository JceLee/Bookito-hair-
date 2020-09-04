import React from "react";

const ServiceNPrice = (props) => {
  const { id, serviceNPrices } = props;
  return (
    <div className="serviceNPrice" id={id}>
      <h2>Service & Price</h2>
      <table>
        <tbody>
          {serviceNPrices.map((serviceNPrice, index) => {
            const { service, price } = serviceNPrice;
            return (
              <tr key={index}>
                <td>{service}</td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceNPrice;
