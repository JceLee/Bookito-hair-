import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Modal } from "antd";
import Spinner from "../../../commonComponents/Spinner";

const Works = (props) => {
  const { id, works } = props;
  const imgCounter = useRef(0);
  const imgCarouselCounter = useRef(0);
  const [ImgLoading, setImgLoading] = useState(true);
  const [ImgCarouselLoading, setImgCarouselLoading] = useState(true);
  const [ModalVisible, setModalVisible] = useState(false);
  const [CurrentImgIndex, setCurrentImgIndex] = useState(0);

  const imageLoaded = () => {
    imgCounter.current += 1;
    if (imgCounter.current >= works.length) {
      setImgLoading(false);
    }
  };

  const imageCarouselLoaded = () => {
    imgCarouselCounter.current += 1;
    if (imgCarouselCounter.current >= works.length) {
      setImgCarouselLoading(false);
    }
  };

  // To display next image in a carousel(Slider component in react-slick)
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

  // To display previous image in a carousel(Slider component in react-slick)
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

  // Settings for carousels(Slider component in react-slick)
  const settings = {
    dots: true,
    initialSlide: CurrentImgIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const onOpenModalHandler = (index) => {
    console.log("opened a modal");
    console.log("Clicked img index: " + index);
    setModalVisible(true);
    setCurrentImgIndex(index);
  };

  const onCloseModalHandler = (CurrentImgIndex) => {
    setModalVisible(false);
    console.log("destroyed the modal when closing");
    console.log("CurrentImgIndex: " + CurrentImgIndex);
    setImgCarouselLoading(true);
  };

  return (
    <div className="works" id={id}>
      <h2>Works</h2>
      {works.length !== 0 && ImgLoading ? <Spinner /> : null}
      <ul className="workGalleryContainer">
        {works.map((work, index) => {
          return works.length === 0 ? (
            "No images attached.."
          ) : (
            <li key={index} className="workImgDiv">
              <img
                src={work}
                alt={`workImg${index}`}
                onClick={() => onOpenModalHandler(index)}
                onLoad={imageLoaded}
              />
            </li>
          );
        })}

        <Modal
          className="workImgModal"
          visible={ModalVisible}
          onCancel={() => onCloseModalHandler(CurrentImgIndex)}
          destroyOnClose={true}
          footer={null}
        >
          {/* Display work images in a carousel in a modal */}
          {works.length !== 0 && ImgCarouselLoading ? <Spinner /> : null}
          <Slider {...settings} className="slick-slider">
            {works.map((work, index) => {
              return (
                <div key={index}>
                  <img
                    src={work}
                    alt={`workImg${index}`}
                    width="300px"
                    height="300px"
                    onLoad={imageCarouselLoaded}
                  />
                </div>
              );
            })}
          </Slider>
        </Modal>
      </ul>
    </div>
  );
};

export default Works;
