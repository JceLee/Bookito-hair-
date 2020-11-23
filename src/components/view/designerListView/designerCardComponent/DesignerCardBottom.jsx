import React from "react";
import Slider from "react-slick";

export default function DesignerCardBottom(props) {
  const { works } = props;
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="designerCardBottom">
      <Slider {...settings}>
        {works &&
          works.map((work, index) => (
            <div key={index} className="workImageDiv">
              <img className="workImage"
                src={work.url}
                alt={`reviewImgDiv${index}`}
                width="100%"
                height="100%"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
