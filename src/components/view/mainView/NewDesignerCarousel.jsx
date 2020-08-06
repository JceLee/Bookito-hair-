import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NewDesignerCarousel() {
  const settings = {
    infinite: true,
    // centerMode: true,
    // centerPadding: "50px",
    // slidesToShow: 4,
    // think about displaying dots

    swipeToSlide: true,
    variableWidth: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  const mockCards = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <div className="newDesignersSection">
      <h2>New Designers</h2>
      <Slider {...settings}>
        {mockCards.map((card, inx) => {
          return (
            <div key={inx} className="newDesignerCard" style={{ width: 300 }}>
              {card}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}