import React from "react";
import MobileSearchBar from "../../commonComponents/mobileSearchBar/MobileSearchBar";
import desktopMainPageBackground from "../../../assets/images/desktopMainPageBackground.jpeg";
import mobileMainPageBackground from "../../../assets/images/mobileMainPageBackground.jpeg";

export default function SearchBarSection() {
  return (
    <div className="searchBarSection">
      <img
        className="searchBarSectionImg"
        src={mobileMainPageBackground}
        width="100%"
        height="100%"
        alt="searchBarSectionImg"
      />
      <img
        className="searchBarSectionDesktopImg"
        src={desktopMainPageBackground}
        alt="searchBarSectionDesktopImg"
      />
      <div id="searchBarForm">
        <MobileSearchBar />
      </div>
    </div>
  );
}
