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
        <div className="newDesignersSection">
            <Slider {...settings}>
            {workImgs.map((img, index) => (
                <div key={index} className="workImageDiv" style={{ width: 300 }}>
                    {img}
                </div>
            ))}
            </Slider>
        </div>
    );
}
