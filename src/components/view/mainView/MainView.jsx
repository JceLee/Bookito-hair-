import React, { useState } from "react";
import SearchBarSection from "./SearchBarSection";
import NewDesignersSection from "./NewDesignersSection";
import JoinUsSection from "./JoinUsSection";
import BookitoFooter from "../../commonComponents/BookitoFooter";

export default function MainView() {
  const tabletLWidth = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const reportWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", reportWindowSize);

  return (
    <>
      <SearchBarSection/>
      <NewDesignersSection/>
      <JoinUsSection/>
      <BookitoFooter/>
    </>
  );
}
