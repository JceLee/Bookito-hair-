import React, { useState, useRef } from "react";

import ShowMoreText from "react-show-more-text";
import Slider from "react-slick";
import { Modal } from "antd";
import ReadOnlyStar from "../../../commonComponents/ReadOnlyStar";
import Spinner from "../../../commonComponents/Spinner";

const Review = (props) => {
  const { id, customerName, photos, rate, comment, date } = props;
  const imgCounter = useRef(0);
  const imgCarouselCounter = useRef(0);
  const [ImgLoading, setImgLoading] = useState(true);
  const [ImgCarouselLoading, setImgCarouselLoading] = useState(true);
  const [ModalVisible, setModalVisible] = useState(false);
  const [CurrentImgIndex, setCurrentImgIndex] = useState(0);

  const imageLoaded = () => {
    imgCounter.current += 1;
    if (imgCounter.current >= photos.length) {
      setImgLoading(false);
    }
  };

  const imageCarouselLoaded = () => {
    imgCarouselCounter.current += 1;
    if (imgCarouselCounter.current >= photos.length) {
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
    <div className="review fade-in" id={id}>
      {photos.length !== 0 && ImgLoading ? <Spinner /> : null}
      <div className="reviewHeader">
        <div className="reviewCustomerNrate">
          <span className="reviewCustomer">{customerName}</span>
          <div className="reviewRate">{<ReadOnlyStar rate={rate} />}</div>
        </div>

        {/* Display review images in a line */}
        <div className="reviewGalleryContainer">
          {photos.length === 0
            ? "No images attached.."
            : photos.map((photo, index) => (
                <div key={index} className="reviewImgDiv">
                  <img
                    src={photo}
                    alt={`reviewImgDiv${index}`}
                    width="50"
                    height="50"
                    onClick={() => onOpenModalHandler(index)}
                    onLoad={imageLoaded}
                  />
                </div>
              ))}
        </div>

        {/* Display review images in a carousel in a modal.
        To fix previous img index issue, set 'destroyOnClose' true */}
        <Modal
          visible={ModalVisible}
          onCancel={() => onCloseModalHandler(CurrentImgIndex)}
          destroyOnClose={true}
          footer={null}
        >
          {/* Display review images in a carousel in a modal */}
          {photos.length !== 0 && ImgCarouselLoading ? <Spinner /> : null}
          <Slider {...settings} className="slick-slider">
            {photos.map((photo, index) => {
              return (
                <div key={index}>
                  <img
                    src={photo}
                    alt={`reviewImg${index}`}
                    onLoad={imageCarouselLoaded}
                  />
                </div>
              );
            })}
          </Slider>
        </Modal>
      </div>

      <div className="reviewContent">
        <section>
          <ShowMoreText lines={2} more="Show More" less="Show Less" width={0}>
            <p>{comment}</p>
            <p>Posted on {date}</p>
          </ShowMoreText>
        </section>
      </div>
    </div>
  );
};

export default Review;
