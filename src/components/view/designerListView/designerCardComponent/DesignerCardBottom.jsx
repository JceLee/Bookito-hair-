import React, { useLayoutEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import placeholder from "../../../../assets/images/placeholder.png";

export default function DesignerCardBottom(props) {
  const { works, mapVisibleDesktop, uid } = props;
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

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
      <Link to={`/designer_profile?uid=${uid}`}>
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
      </Link>
    </div>
  );
}
