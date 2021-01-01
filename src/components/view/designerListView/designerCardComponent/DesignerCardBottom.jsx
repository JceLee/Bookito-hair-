import React from "react";
import Slider from "react-slick";
import placeholder from "../../../../assets/images/placeholder.png";

export default function DesignerCardBottom(props) {
  const { works, mapVisibleDesktop } = props;

  const calculateSlidesCount = () => {
    if (window.innerWidth < 768 || (mapVisibleDesktop && 1200 <= window.innerWidth && window.innerWidth < 1920)) {
      return 2;
    } else {
      return 4;
    }
  };

  const settings = {
    slidesToShow: calculateSlidesCount(),
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="designerCardBottom">
      <Slider {...settings}>
        {works &&
          works.map((work, index) => (
            <div key={index} className="workImageDiv">
              <img className={mapVisibleDesktop ? "workImage workImageMapVisibleDesktop" : "workImage"}
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
