import React from "react";
import MobileSearchBar from "../../commonComponents/mobileSearchBar/MobileSearchBar";
import desktopMainPageBackground from "../../../assets/images/desktopMainPageBackground.jpeg";
import mobileMainPageBackground from "../../../assets/images/mobileMainPageBackground.jpeg";

export default function SearchBarSection() {
  return (
    <div className="searchBarSection">
      <img
        className="searchBarSectionImg"
        src="https://images.unsplash.com/photo-1512206375328-39c0d295e698?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
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
