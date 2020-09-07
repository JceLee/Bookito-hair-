import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BackTop } from "antd";
import DesignerProfileTop from "./designerProfileTop/DesignerProfileTop.jsx";
import DesignerProfileBottom from "./designerProfileBottom/DesignerProfileBottom.jsx";
import { useSelector } from "react-redux";

export default function DesignerProfileView() {
  const designers = useSelector((state) => state.firestore.designers);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const designerId = urlParams.get("uid");
  const selectedDesigner = designers.find(
    (element) => element.uid === designerId
  );
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
    services,
    hours,
    reviews,
  } = selectedDesigner;
  console.log(selectedDesigner);

  return (
    <BrowserRouter>
      <div className="designerProfileView">
        <DesignerProfileTop
          isAuthenticated={isAuthenticated}
          fname={fname}
          lname={lname}
          totalRate={rate}
          hours={hours}
          works={works}
          location={location}
          img={profile}
          services={services}
        />
        <DesignerProfileBottom
          fname={fname}
          location={location}
          activity={activity}
          bio={bio}
          works={works}
          serviceNPrices={services}
          hours={hours}
          reviews={reviews}
        />
        <BackTop>
          <div className="backTopButton">Top</div>
        </BackTop>
      </div>
    </BrowserRouter>
  );
}
