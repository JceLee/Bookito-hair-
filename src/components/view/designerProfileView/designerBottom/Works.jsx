import React, { useState } from 'react';
import Slider from 'react-slick';
import { Card, Modal } from 'antd';

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

  return (
    <>
      <div className='works' id={props.id}>
        <h2>Works</h2>
        <div className='workGalleryContainer'>
          {props.works.map((work, index) => {
            return props.works.length === 0 ? (
              'No images attached..'
            ) : (
              <div key={index}>
                <div className='workImgDiv'>
                  <Card
                    hoverable={true}
                    size={'small'}
                    style={{
                      backgroundColor: 'whitesmoke',
                      borderRadius: '15px',
                      border: '1px outset',
                    }}
                  >
                    <img
                      src={work}
                      alt={`workImg${index}`}
                      width='150'
                      height='150'
                      onClick={() => onOpenModalHandler(index)}
                    />
                  </Card>
                </div>
              </div>
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
              {props.works.map((work, index) => {
                return (
                  <div key={index}>
                    <img src={work} alt={`workImg${index}`} />
                  </div>
                );
              })}
            </Slider>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Works;
