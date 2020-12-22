import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import sliderScss from "../../../assets/scss/view/mainView/AwesomeSlider.scss";
import image1 from "../../../assets/backgrounds/background1.jpg";
import image2 from "../../../assets/backgrounds/background2.jpg";
import image3 from "../../../assets/backgrounds/background3.jpg";
import image4 from "../../../assets/backgrounds/background4.jpg";
import image5 from "../../../assets/backgrounds/background5.jpg";
import image6 from "../../../assets/backgrounds/background6.jpg";

const desktops = [image1, image2, image3, image4, image5, image6]
const tmpCss = {
  backgroundColor: "#fdfdfd",
  height: "6px",
  width: "100%",
  objectFit: "cover",
  position: "absolute",
  zIndex: 3
}

export default function MainSearchBarSlideBackground() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="searchBarSectionDesktopImg" style={{width:"100%", height:"550px"}}>
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
        {desktops.map((img, inx) => (
          <div data-src={img} />
        ))}
      </AutoplaySlider>
    </div>
  );
}
