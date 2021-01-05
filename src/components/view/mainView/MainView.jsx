import React, {useState} from "react";
import SearchBarSection from "./SearchBarSection";
import NewDesignersDesktopSection from "./NewDesignersDesktopSection";
import JoinUsMobile from "./JoinUsMobile";
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
      {screenWidth < tabletLWidth ? <JoinUsMobile/> : <JoinUsMobile/>}
      <NewDesignersDesktopSection/>
      <div className="newDesignerMobileSection"/>
      <BookitoFooter/>
    </>
  );
}
