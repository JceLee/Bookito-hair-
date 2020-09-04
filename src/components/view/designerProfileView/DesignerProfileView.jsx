import React from "react";

import { BrowserRouter } from "react-router-dom";
import { BackTop } from "antd";
import DesignerTop from "./designerTop/DesignerTop.jsx";
import DesignerBottom from "./designerBottom/DesignerBottom.jsx";
import { useSelector } from "react-redux";

const DesignerProfileView = () => {
  const designers = useSelector((state) => state.firestore.designers);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const designerId = urlParams.get("uid");
  const found = designers.find((element) => element.uid === designerId);

  const {
    isAuthenticated,
    fname,
    lname,
    location,
    rate,
    profile,
    activity,
    bio,
    works,
    serviceNPrices,
    hours,
    reviews,
  } = found;

  return (
    <BrowserRouter>
      <div className="designerProfileView">
        <DesignerTop
          isAuthenticated={isAuthenticated}
          fname={fname}
          lname={lname}
          totalRate={rate}
          works={works}
          location={location}
          img={profile}
        />

        <DesignerBottom
          fname={fname}
          location={location}
          activity={activity}
          bio={bio}
          works={works}
          serviceNPrices={serviceNPrices}
          hours={hours}
          reviews={reviews}
        />

        <BackTop visibilityHeight={0}>
          <div className="backTopBtn">Top</div>
        </BackTop>
      </div>
    </BrowserRouter>
  );
};

export default DesignerProfileView;
