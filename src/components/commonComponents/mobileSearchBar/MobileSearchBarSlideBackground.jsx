import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import sliderScss from "../../../assets/scss/view/mainView/AwesomeSlider.scss";
import mobile1 from "../../../assets/backgrounds/mobile1.jpg";
import mobile2 from "../../../assets/backgrounds/mobile2.jpg";
import mobile3 from "../../../assets/backgrounds/mobile3.jpg";
import mobile4 from "../../../assets/backgrounds/mobile4.jpg";

const mobiles = [mobile1, mobile2, mobile3, mobile4]
const tmpCss = {
  backgroundColor: "#fdfdfd",
  height: "6px",
  width: "100%",
  objectFit: "cover",
  position: "absolute",
  zIndex: 3
}

export default function MobileSearchBarSlideBackground() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
      <div className="searchBarSectionImg" style={{width:"100%", height:"450px"}}>
        <div style={tmpCss}/>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={8000}
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
  );
}
