import React, { useState } from "react";
import MobileSearchBar from "../../commonComponents/mobileSearchBar/MobileSearchBar";
import desktopMainPageBackground from "../../../assets/images/desktopMainPageBackground.jpeg";
import mobileMainPageBackground from "../../../assets/images/mobile.png";
import MainSearchBar from "../../commonComponents/mainSearchBar/MainSearchBar";

export default function SearchBarSection() {
  const tabletLWidth = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const reportWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", reportWindowSize);

  return (
    <div className="searchBarSection">
      <img
        className="searchBarSectionImg"
        src={mobileMainPageBackground}
        alt="searchBarSectionImg"
      />
      <img
        className="searchBarSectionDesktopImg"
        src={desktopMainPageBackground}
        alt="searchBarSectionDesktopImg"
      />
      <div id="searchBarForm">
        {screenWidth < tabletLWidth ? <MobileSearchBar /> : <MainSearchBar />}
      </div>
    </div>
  );
}
