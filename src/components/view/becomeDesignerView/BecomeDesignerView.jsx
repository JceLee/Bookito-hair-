import React from "react";
import InfoCard from "../mainView/InfoCard";

export default function BecomeDesignerView() {
  return (
    <div className="becomeDesignerView">
      <div className="mainHeading">An online booking system tailored for beauticians.</div>
      <div className="subHeading">
        Manage your schedule and let your clients book appointments online.
      </div>
      <button className="getStartedBtn">Get Started</button>
      <div className="infoCardsSection">
        <InfoCard
          header="Manage your schedule"
          src="https://www.flaticon.com/svg/static/icons/svg/2693/2693507.svg"
        />
        <InfoCard
          header="Let clients book online"
          src="https://www.flaticon.com/svg/static/icons/svg/3062/3062987.svg"
        />
        <InfoCard
          header="Chat with your clients"
          src="https://www.flaticon.com/svg/static/icons/svg/1078/1078011.svg"
        />
      </div>
    </div>
  );
}
