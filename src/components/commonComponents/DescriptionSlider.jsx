import React from "react";
import Slider from "react-slick";

const descriptions = [
    {
        title: "sampleTitle1",
        imgSrc: "https://picsum.photos/id/2/250/250",
        description: "sampleDescription1",
    },
    {
        title: "sampleTitle2",
        imgSrc: "https://picsum.photos/id/3/250/250",
        description: "sampleDescription2",
    },
    {
        title: "sampleTitle3",
        imgSrc: "https://picsum.photos/id/4/250/250",
        description: "sampleDescription3",
    },
];

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
};

const settings = {
    dots: true,
    centerMode: true,
    initialSlide: 0,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

export default function DescriptionSlider() {
    const onClickDescriptionImg = (descriptionImg) => {
        console.log(descriptionImg);
    };

    return (
        // <div className="descriptionSlider">
            <Slider {...settings}>
                {descriptions.map((image, index) => {
                    const { title, imgSrc, description } = image;
                    return (
                        <div className="descriptionSlider" key={index}>
                            <span className="descriptionTitle" >{title}</span>
                            <img
                                className="descriptionImgImgInSlider"
                                src={imgSrc}
                                alt={`image${index}`}
                                onClick={() => onClickDescriptionImg(imgSrc)}
                            />
                            <span className="descriptionImgCaption">
                                {description}
                            </span>
                        </div>
                    );
                })}
            </Slider>
        // </div>
    );
}
