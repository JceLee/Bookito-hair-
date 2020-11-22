import React from "react";

export default function ServiceNPrice(props) {
  const { id, serviceNPrices } = props;
  const serviceList = [];
  Object.keys(serviceNPrices).forEach(function (item) {
      serviceList.push(serviceNPrices[item])
  });
  const mergedArray = [].concat(...serviceList);
  return (
    <div className="serviceNPrice" id={id}>
      <h2>Service & Price</h2>
      <table>
        <tbody>
          {mergedArray.map((element, index) => {
            const { service, price } = element;
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
}
