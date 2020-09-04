import React from "react";
import Slider from "react-slick";

export default function DesignerCardBottom(props) {
  const { works } = props;
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  return (
    <div className="designerCardBottom">
      <Slider {...settings}>
        {works &&
          works.map((work, index) => (
            <div key={index} className="workImageDiv">
              <img
                src={work}
                alt={`reviewImgDiv${index}`}
                width="75"
                height="75"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
