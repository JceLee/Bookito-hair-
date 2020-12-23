import React from "react";

export default function ServiceNPrice(props) {
  const { id, serviceNPrices } = props;
  const serviceList = [];
  console.log("babo");
  Object.keys(serviceNPrices).forEach(function (item) {
    serviceList.push(serviceNPrices[item]);
  });
  const mergedArray = [].concat(...serviceList);
  return (
    <div className="serviceNPrice" id={id}>
      <h2 id="serviceAndPrice">Service & Price</h2>
      <div className="serviceAndPriceLists">
      <table>
        <tbody>
          {mergedArray.map((element, index) => {
            const { service, price } = element;
            return (
              <tr key={index}>
                <td id="service">{service}</td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}
