import React, { useState } from 'react';

import Slider from 'react-slick';
import { Modal } from 'antd';
import ReadOnlyStar from '../../../commonComponents/ReadOnlyStar';

const Review = (props) => {
  const { id, customerName, photos, rate, review, date } = props;
  const [ModalVisible, setModalVisible] = useState(false);
  const [CurrentImgIndex, setCurrentImgIndex] = useState(0);

  // To display next image in a carousel(Slider component in react-slick)
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
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
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  };

  // Settings for carousels(Slider component in react-slick)
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
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
    console.log('opened a modal');
    console.log('Clicked img index: ' + index);
    setModalVisible(true);
    setCurrentImgIndex(index);
  };

  const onCloseModalHandler = (CurrentImgIndex) => {
    setModalVisible(false);
    console.log('destroyed the modal when closing');
    console.log('CurrentImgIndex: ' + CurrentImgIndex);
  };

  return (
    <div className='review fade-in' id={id}>
      <div className='reviewHeader'>
        <div className='reviewCustomerNrate'>
          <span className='reviewCustomer'>{customerName}</span>
          <div className='reviewRate'>{<ReadOnlyStar rating={rate} />}</div>
        </div>

        {/* Display review images in a line */}
        <div className='reviewGalleryContainer'>
          {photos.length === 0
            ? 'No images attached..'
            : photos.map((photo, index) => (
                <div key={index} className='reviewImgDiv'>
                  <img
                    src={photo}
                    alt={`reviewImgDiv${index}`}
                    width='50'
                    height='50'
                    onClick={() => onOpenModalHandler(index)}
                  />
                </div>
              ))}
        </div>

        {/* Display review images in a carousel in a modal.
        To fix previous img index issue, set 'destroyOnClose' true */}
        <Modal
          title='Posted by Customers'
          visible={ModalVisible}
          onCancel={() => onCloseModalHandler(CurrentImgIndex)}
          destroyOnClose={true}
          footer={null}
        >
          {/* Display review images in a carousel in a modal */}
          <Slider {...settings} className='slick-slider'>
            {photos.map((photo, index) => {
              return (
                <div key={index}>
                  <img src={photo} alt={`reviewImg${index}`} />
                </div>
              );
            })}
          </Slider>
        </Modal>
      </div>

      <div className='reviewContent'>
        <section>
          <p>{review}</p>
          <p>Posted on {date}</p>
        </section>
      </div>
    </div>
  );
};

export default Review;
