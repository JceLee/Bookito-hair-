import React from "react";
import Home from "./Home.jsx";
import Works from "./Works.jsx";
import Hours from "./Hours.jsx";
import Location from "./Location.jsx";
import ReviewContainer from "./ReviewContainer";
import ServiceNPrice from "./ServiceNPrice";
import { Divider } from "antd";
import { useSelector } from "react-redux";

export default function DesignerProfileBottom() {
  const designer = useSelector((state) => state.selectedDesigner.selectedDesigner);
  return (
    <div className="designerBottom">
      <Home id="Home" />
      <Works id="Works" works={designer.works} />
      <Divider className="profileDivider" />
      <div className="serviceNPriceHoursGrid">
          <div className="serviceGrid">
              <ServiceNPrice id="Price" serviceNPrices={designer.services} />
          </div>
      </div>
      <Divider className="profileDivider" />
      <div className="hrsAndReviews">
      <div className="serviceNPriceHoursGrid">
        <div className="hoursGrid">
          <Hours id="Hours" hours={designer.hours} />
        </div>
      </div>
      <Divider id="HrsReviewDivider" />
      <div className="serviceNPriceHoursGrid">
        <div className="hoursGrid">
        <ReviewContainer />
        </div>
      </div>
      </div>
      <Divider className="profileDivider" />
      <Location id="Location" location={designer.location} latLng={designer.latLng} />
    </div>
  );
}
