import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import sliderScss from "../../../assets/scss/view/mainView/AwesomeSlider.scss";
import mobile1 from "../../../assets/images/backgrounds/mobile1.jpg";
import mobile2 from "../../../assets/images/backgrounds/mobile2.jpg";
import mobile3 from "../../../assets/images/backgrounds/mobile3.jpg";
import mobile4 from "../../../assets/images/backgrounds/mobile4.jpg";
import mobile5 from "../../../assets/images/backgrounds/mobile5.jpg";
import mobile6 from "../../../assets/images/backgrounds/mobile6.jpg";
import mobile7 from "../../../assets/images/backgrounds/mobile7.jpg";

const mobiles = [mobile5, mobile6, mobile1, mobile2, mobile4, mobile7, mobile3 ]

export default function MobileSearchBarSlideBackground() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
      <div className="searchBarSectionImg" style={{width:"100%", height:"450px"}}>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={4000}
          bullets={false}
          fillParent={true}
          buttons={false}
          showTimer={false}
          cssModule={sliderScss}
        >
          {mobiles.map((img, inx) => (
            <div data-src={img} key={inx}/>
          ))}
        </AutoplaySlider>
      </div>
  );
}
