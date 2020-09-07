import React from "react";
import Home from "./Home.jsx";
import Works from "./Works.jsx";
import Hours from "./Hours.jsx";
import Location from "./Location.jsx";
import { Divider } from "antd";

export default function DesignerProfileBottom(props) {
  const { location, works, hours } = props;
  return (
    <div className="designerBottom">
      <Home id="Home" />
      <Works id="Works" works={works} />
      <Divider className="profileDivider" />
      <div className="serviceNPriceHoursGrid">
        <div className="hoursGrid">
          <Hours id="Hours" hours={hours} />
        </div>
      </div>
      <Divider className="profileDivider" />
      <Divider className="profileDivider" />
      <Location id="Location" location={location} />
    </div>
  );
}
