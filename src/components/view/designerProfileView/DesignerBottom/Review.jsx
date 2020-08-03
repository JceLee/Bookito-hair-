import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import RatingSymbol from '../RatingSymbol';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Review = (props) => {
  const { customerName, photos, rate, review, date } = props;

  return (
    <div className='review' id={props.id}>
      <div className='reviewNameNRate'>
        <span>
          <strong>{customerName}</strong>
        </span>
        {<RatingSymbol rate={rate} />}
      </div>
      <div className='reviewContent'>
        <section>
          <p>{review}</p>
          <p>Posted on {date}</p>
        </section>
      </div>

      <div className='reviewCarousel'>
        <Carousel showThumbs={false}>
          {photos.map((photo, index) => {
            return (
              <div className='photos' key={index}>
                <img src={photo} alt='' />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
