import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import sliderScss from "../../../assets/scss/view/mainView/AwesomeSlider.scss";
import image1 from "../../../assets/images/backgrounds/background1.jpg";
import image2 from "../../../assets/images/backgrounds/background2.jpg";
import image3 from "../../../assets/images/backgrounds/background3.jpg";
import image4 from "../../../assets/images/backgrounds/background4.jpg";
import image5 from "../../../assets/images/backgrounds/background5.jpg";
import image6 from "../../../assets/images/backgrounds/background6.jpg";
import image7 from "../../../assets/images/backgrounds/background7.jpg";

const desktops = [image1, image2, image3, image4, image5, image6, image7]
const tmpCss = {
  backgroundColor: "#fdfdfd",
  height: "8px",
  width: "100%",
  objectFit: "cover",
  position: "absolute",
  zIndex: 3
}

export default function MainSearchBarSlideBackground() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="searchBarSectionDesktopImg">
      <div style={tmpCss}/>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
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
