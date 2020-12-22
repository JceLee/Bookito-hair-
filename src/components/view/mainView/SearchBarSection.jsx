import React, {useState} from "react";
import MobileSearchBar from "../../commonComponents/mobileSearchBar/MobileSearchBar";
import MainSearchBar from "../../commonComponents/mainSearchBar/MainSearchBar";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import sliderScss from "../../../assets/scss/view/mainView/AwesomeSlider.scss";
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
const tmpCss = {
  backgroundColor: "#fdfdfd",
  height: "6px",
  width: "100%",
  objectFit: "cover",
  position: "absolute",
  zIndex: 3
}

export default function SearchBarSection() {
  const tabletLWidth = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const reportWindowSize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", reportWindowSize);

  return (
    <div className="searchBarSection">
      {/*<img*/}
      {/*  className="searchBarSectionImg"*/}
      {/*  src={mobiles[activeIndex]}*/}
      {/*  alt="searchBarSectionImg"*/}
      {/*/>*/}
      <div className="searchBarSectionImg" style={{width:"100%", height:"450px"}}>
        <div style={tmpCss}/>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={2500}
          bullets={false}
          fillParent={true}
          buttons={false}
          cssModule={sliderScss}
        >
          {mobiles.map((img, inx) => (
            <div data-src={img} />
          ))}
        </AutoplaySlider>
      </div>
      <img
        className="searchBarSectionDesktopImg"
        src={desktops[1]}
        alt="searchBarSectionDesktopImg"
      />
      <div id="searchBarForm">
        {screenWidth < tabletLWidth ? <MobileSearchBar /> : <MainSearchBar />}
      </div>
    </div>
  );
}
