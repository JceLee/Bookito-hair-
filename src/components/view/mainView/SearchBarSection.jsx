import React, { useState } from "react";
import MobileSearchBar from "../../commonComponents/mobileSearchBar/MobileSearchBar";
import MainSearchBar from "../../commonComponents/mainSearchBar/MainSearchBar";
import MobileSearchBarSlideBackground from "../../commonComponents/mobileSearchBar/MobileSearchBarSlideBackground";
import MainSearchBarSlideBackground from "../../commonComponents/mainSearchBar/MainSearchBarSlideBackground";

export default function SearchBarSection() {
  const tabletLWidth = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const reportWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", reportWindowSize);

  return (
    <section className="searchBarSection">
      {screenWidth < tabletLWidth ? (
        <MobileSearchBarSlideBackground />
      ) : (
        <MainSearchBarSlideBackground />
      )}
      <div id="searchBarForm">
        {screenWidth < tabletLWidth ? (
          <MobileSearchBar />
        ) : (
          <>
            <h1 id="searchBarLabel">Find your Beautician</h1>
            <MainSearchBar />
          </>
        )}
      </div>
    </section>
  );
}
