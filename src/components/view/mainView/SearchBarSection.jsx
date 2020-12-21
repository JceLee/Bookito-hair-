import React, {useEffect, useRef, useState} from "react";
import MobileSearchBar from "../../commonComponents/mobileSearchBar/MobileSearchBar";
import desktopMainPageBackground from "../../../assets/images/desktopMainPageBackground.jpeg";
import mobileMainPageBackground from "../../../assets/images/mobile.png";
import MainSearchBar from "../../commonComponents/mainSearchBar/MainSearchBar";
import { useTransition, animated, config } from 'react-spring'
import image1 from "../../../assets/backgrounds/background1.jpg";
import image2 from "../../../assets/backgrounds/background2.jpg";
import image3 from "../../../assets/backgrounds/background3.jpg";
import image4 from "../../../assets/backgrounds/background4.jpg";
import image5 from "../../../assets/backgrounds/background5.jpg";
import image6 from "../../../assets/backgrounds/background6.jpg";
import mobile1 from "../../../assets/backgrounds/mobile1.jpg";
import mobile2 from "../../../assets/backgrounds/mobile2.jpg";
import mobile3 from "../../../assets/backgrounds/mobile3.jpg";
import mobile4 from "../../../assets/backgrounds/mobile4.jpg";


const desktops = [image1, image2, image3, image4, image5, image6]
const mobiles = [mobile1, mobile2, mobile3, mobile4]

export default function SearchBarSection() {
  const tabletLWidth = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (screenWidth > 700) {
      setTimeout(() => {
        setActiveIndex((activeIndex + 1) % desktops.length);
      }, 3000);
    } else {
      setTimeout(() => {
        setActiveIndex((activeIndex + 1) % mobiles.length);
      }, 3000);
    }
  }, [activeIndex]);

  const reportWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", reportWindowSize);

  return (
    <div className="searchBarSection">
      <img
        className="searchBarSectionImg"
        src={mobiles[activeIndex]}
        alt="searchBarSectionImg"
      />
      <img
        className="searchBarSectionDesktopImg"
        src={desktops[activeIndex]}
        alt="searchBarSectionDesktopImg"
      />
      <div id="searchBarForm">
        {screenWidth < tabletLWidth ? <MobileSearchBar /> : <MainSearchBar />}
      </div>
    </div>
  );
}
