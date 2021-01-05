import React  from "react";

import { Card } from "antd";
import ReadOnlyStar from "../../../commonComponents/ReadOnlyStar";

let reviewVisibility;
export default function Review(props) {
  const { id, customerName, rate, comment, date } = props;

  const dateFormatter = (date) => {
    const [day, mm, dd, yy] = date.split(" ");
    return `${mm} ${dd}`;
  };

  const determineVisibility = () => {
    if (customerName == "") {
      reviewVisibility = "hidden";
    } else {
      reviewVisibility = "visible";
    }
    return reviewVisibility;
  };

  return (
    <div className="review fade-in" id={id}>
      <Card size="small" style={{ visibility: `${determineVisibility()}` }}>
        <span id="reviewCustomerName">{customerName}</span>
        <ReadOnlyStar rate={rate} style={{ visibility: `${determineVisibility()}` }} />
        <p className="reviewDate">{dateFormatter(date)}</p>
        <div className="reviewContentContainter">
          <p className="reviewContent">{comment}</p>
        </div>
      </Card>
    </div>
  );
}
