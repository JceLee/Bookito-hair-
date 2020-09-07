import React from "react";
import MobileSearchBar from "../../commonComponents/mobileSearchBar/MobileSearchBar";
import MainSearchBar from "../../commonComponents/mainSearchBar/MainSearchBar";
import testImg from "../../../assets/images/testImg.png";

export default function SearchBarSection() {
  const tabletLWidth = 768;
  var screenWidth = window.innerWidth;

  return (
    <div className="searchBarSection">
      <img
        className="searchBarSectionImg"
        src={testImg}
        width="100%"
        height="100%"
        alt="searchBarSectionImg"
      />
      <div id="searchBarForm">
        {screenWidth <= tabletLWidth ? <MobileSearchBar /> : <MainSearchBar />}
      </div>
    </div>
  );
}
