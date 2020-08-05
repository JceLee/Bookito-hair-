import React, { useState, useCallback } from 'react';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import RatingSymbol from '../RatingSymbol';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Review = (props) => {
  const { customerName, photos, rate, review, date } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  let width = 5; // initial width = 5vw
  const setWidth = (photoLength) => {
    switch (photoLength) {
      case 1:
        width *= 1;
        break;
      case 2:
        width *= 2;
        break;
      case 3:
        width *= 3;
        break;
      case 4:
        width *= 4;
        break;
      default:
        width *= 0;
    }
    return width;
  };

  return (
    <div className='review' id={props.id}>
      <div className='reviewNameNRate'>
        <span>
          <strong>{customerName}</strong>
        </span>
        {<RatingSymbol rate={rate} />}
        <div style={{ width: `${setWidth(photos.length) + 'vw'}` }}>
          <Gallery
            margin={5}
            photos={photos}
            onClick={openLightbox}
            targetRowHeight={70}
            limitNodeSearch={4}
          />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((photo) => ({
                    ...photo,
                    srcset: photo.srcSet,
                    caption: photo.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
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
