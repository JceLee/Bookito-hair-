import React, { useState } from 'react';
import Slider from 'react-slick';
import { Modal } from 'antd';

const Works = (props) => {
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

  const { id, works } = props;

  return (
    <div className='works' id={id}>
      <h2>Works</h2>

      <ul className='workGalleryContainer'>
        {works.map((work, index) => {
          return works.length === 0 ? (
            'No images attached..'
          ) : (
            <li key={index} className='workImgDiv'>
              <img
                src={work}
                alt={`workImg${index}`}
                onClick={() => onOpenModalHandler(index)}
              />
            </li>
          );
        })}

        <Modal
          title='Posted by Designers'
          visible={ModalVisible}
          onCancel={() => onCloseModalHandler(CurrentImgIndex)}
          destroyOnClose={true}
          footer={null}
        >
          {/* Display work images in a carousel in a modal */}
          <Slider {...settings} className='slick-slider'>
            {works.map((work, index) => {
              return (
                <div key={index}>
                  <img src={work} alt={`workImg${index}`} />
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
