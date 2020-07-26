import React, { useState, useCallback } from 'react';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const photos = [
  {
    src: '/images/designers/designer_works_01.png',
    // sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_02.png',
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_03.png',
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_04.png',
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_05.png',
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_06.png',
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_07.png',
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 1,
    height: 1,
  },
  {
    src: '/images/designers/designer_works_08.png',
    sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
    width: 1,
    height: 1,
  },
  // {
  //   src: '/images/designers/designer_works_09.png',
  //   sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],
  //   width: 1,
  //   height: 1,
  // },
];

const Works = (props) => {
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

  return (
    <>
      <div className='works' id={props.id}>
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
    </>
  );
};

export default Works;
