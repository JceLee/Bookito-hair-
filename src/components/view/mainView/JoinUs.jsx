import React from "react";
import Slider from "react-slick";
import BecomeDesignerView from "../becomeDesignerView/BecomeDesignerView";

const images = {
  "Hair Dressor": "https://picsum.photos/id/2/225/225",
  "Lash Designer": "https://picsum.photos/id/3/225/225",
  "Nail Artist": "https://picsum.photos/id/4/225/225",
};

const settings = {
  centerMode: true,
  initialSlide: 0,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
};

export default function JoinUs() {
  const onClickDesignerTypeImg = (designerType) => {
    console.log(designerType);
    return <BecomeDesignerView />;
  };

  return (
    <div className="desigerTypeSlider">
      <span className="designerTypeSliderHeader">Join awesome beauticians on Bookito</span>
      <Slider {...settings} className="slick-slider">
        {Object.values(images).map((image, index) => {
          const designerType = Object.keys(images).find((key) => images[key] === image);
          return (
            <div key={index}>
              <img
                className="designerTypeImgInSlider"
                src={image}
                alt={`image${index}`}
                onClick={() => onClickDesignerTypeImg(designerType)}
              />
              <span className="designerTypeCaption">{designerType}</span>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
