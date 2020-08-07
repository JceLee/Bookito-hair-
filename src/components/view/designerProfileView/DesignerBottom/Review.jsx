import React, { useState } from 'react';

import Slider from 'react-slick';
import { Modal } from 'antd';
import RatingSymbol from '../RatingSymbol';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

const Review = (props) => {
  const { customerName, photos, rate, review, date } = props;
  const [ModalVisible, setModalVisible] = useState(false);
  const [CurrentImgIndex, setCurrentImgIndex] = useState(0);
  const [ImgIndexAfterClosingModal, setImgIndexAfterClosingModal] = useState(
    CurrentImgIndex
  );

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
    // beforeChange: (current, next) => setCurrentImgIndex(next),
    // afterChange: (current) => setCurrentImgIndex(current),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const onClickModalHandler = (index) => {
    console.log('open');
    console.log('Index: ' + index);
    setModalVisible(true);
    setCurrentImgIndex(index);
    console.log('CurrentImgIndex: ' + CurrentImgIndex);
  };

  const onCancelHandler = (CurrentImgIndex) => {
    setModalVisible(false);
    console.log('close');
    console.log('CurrentImgIndex: ' + CurrentImgIndex);
    setImgIndexAfterClosingModal(CurrentImgIndex);
    console.log('ImgIndexAfterClosingModal: ' + ImgIndexAfterClosingModal);
  };

  return (
    <div className='review fade-in' id={props.id}>
      <div className='reviewNameNRate'>
        <span>
          <strong>{customerName}</strong>
        </span>
        {<RatingSymbol rate={rate} />}

        {photos.map((photo, index) => {
          return (
            <div key={index}>
              <div className='reviewImgDiv'>
                <img
                  src={photo}
                  alt={`reviewImg${index}`}
                  width='50'
                  height='50'
                  onClick={() => onClickModalHandler(index)}
                />
              </div>
            </div>
          );
        })}

        <Modal
          title='Posted by Customers'
          visible={ModalVisible}
          onCancel={() => onCancelHandler(CurrentImgIndex)}
          destroyOnClose={true}
          footer={null}
        >
          <p>clicked img index : {CurrentImgIndex}</p>

          <Slider {...settings} className='slick-slider'>
            {console.log('initialSlide: ' + settings.initialSlide)}
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
