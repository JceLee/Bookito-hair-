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
        <imgs
          src="https://images.unsplash.com/photo-1588774198473-71712354c232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80"
          alt=""
          width="100%"
        />
      </div>
      <div className="announcements">
        <img
          src="https://images.unsplash.com/photo-1588779851923-49014f6396ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt=""
          width="100%"
        />
      </div>
    </Slider>
  );
}
