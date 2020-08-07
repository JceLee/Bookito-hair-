// import React, { useState, useCallback } from 'react';

// import Gallery from 'react-photo-gallery';
// import ResponsiveGallery from 'react-responsive-gallery';
// import Carousel, { Modal, ModalGateway } from 'react-images';

// const Works = (props) => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   return (
//     <>
//       <div className='works' id={props.id}>
//         <h2>Works</h2>
//         <div className='workGallery'>
//           <Gallery photos={props.works} onClick={openLightbox} />
//         </div>
//         <ModalGateway>
//           {viewerIsOpen ? (
//             <Modal onClose={closeLightbox}>
//               <Carousel
//                 currentIndex={currentImage}
//                 views={props.works.map((work) => ({
//                   ...work,
//                   srcset: work.srcSet,
//                   caption: work.title,
//                 }))}
//               />
//             </Modal>
//           ) : null}
//         </ModalGateway>
//       </div>
//     </>
//   );
// };

// export default Works;

import React, { useState, useCallback } from 'react';

import ResponsiveGallery from 'react-responsive-gallery';

const Works = (props) => {
  return (
    <>
      <div className='works' id={props.id}>
        <h2>Works</h2>
        <div className='workGallery'>
          <ResponsiveGallery
            images={props.works}
            // onClick={openLightbox}
            useLightBox={true}
            numOfImagesPerRow={{ xs: 1, s: 2, m: 2, l: 4, xl: 4, xxl: 4 }}
            colsPadding={{ xs: 4, s: 4, m: 4, l: 4, xl: 4, xxl: 4 }}
            imagesPaddingBottom={{ xs: 8, s: 8, m: 8, l: 8, xl: 8, xxl: 8 }}
          />
          {/* xs: From 0 to 420px
              s: From 420px to 600px
              m: From 600px to 768px
              l: From 768px to 992px
              xl: From 992px to 1200px
              xxl: From 1200px to infinity */}
        </div>
      </div>
    </>
  );
};

export default Works;
