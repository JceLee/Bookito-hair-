import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Announcement(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="announcements">
        <h3>Announcement 1</h3>
      </div>
      <div className="announcements">
        <h3>Announcement 2</h3>
      </div>
    </Slider>
  );
}
