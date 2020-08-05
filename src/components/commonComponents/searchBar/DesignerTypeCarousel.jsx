import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { designerType } from "../../constants/designerType";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../assets/scss/commonComponents/searchBar/DesignerTypeCarousel.scss";

export default function DesignerTypeCarousel(props) {
  const { setDesignerType } = props;

  useEffect(() => {
    setDesignerType(designerType[0]); // Set default designer type as hair designer
  });

  const settings = {
    className: "",
    // Hide navigation with arrows and dots
    arrows: false,
    dots: false,
    // Enable click and slide navigation
    focusOnSelect: true,
    swipeToSlide: true,
    // Center selected option
    centerMode: true,
    centerPadding: 0,
    // Misc
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    afterChange: (index) => {
      const selectedDesignerType = designerType[index % designerType.length];
      console.log(index);
      console.log(`Slider Changed to: ${selectedDesignerType}`);
      setDesignerType(selectedDesignerType);
    },
  };

  const mockJobTypes = ["Hair Designer", "Nail Artist", "MakeUp Artist"];

  return (
    <div className="designerTypeCarousel">
      <Slider {...settings}>
        <div>
          <h2>Hair Designer</h2>
        </div>
        <div>
          <h2>Nail Artist</h2>
        </div>
        <div>
          <h2>Eyelash Something</h2>
        </div>
        <div>
          <h2>Hair Designer</h2>
        </div>
        <div>
          <h2>Nail Artist</h2>
        </div>
        <div>
          <h2>Eyelash Something</h2>
        </div>
      </Slider>
    </div>
  );
}
