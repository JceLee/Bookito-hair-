import React, { Fragment, useState, useCallback } from 'react';

import classes from './Works.module.css';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const photos = [
  {
    src: '/images/designers/designer_works_01.png',
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_02.png',
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_03.png',
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_04.png',
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_05.png',
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_06.png',
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_07.png',
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_08.png',
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_09.png',
    width: 1,
    height: 1,
  },
];

const Works = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Fragment>
      <div className={classes.Works}>
        <h2>Works</h2>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </Fragment>
  );
};

export default Works;
