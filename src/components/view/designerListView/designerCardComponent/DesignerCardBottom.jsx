import React from "react";
import Slider from "react-slick";

export default function DesignerCardBottom(props) {
    const { workImgs } =  props;
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false
    }

    return (
        <div className="designerCardBottom">
            <Slider {...settings}>
            {workImgs.map((img, index) => (
                <div key={index} className="workImageDiv">
                    {img}
                </div>
            ))}
            </Slider>
        </div>
    );
}
