import React from 'react';
import Review from './Review';

const Reviews = (props) => (
  <div className='reviews' id={props.id}>
    <h2>Reviews</h2>
    {props.reviews.map((review, customerId) => {
      return (
        <Review
          key={customerId}
          customerName={review.customerName}
          photos={review.photos}
          rate={review.rate}
          review={review.review}
          date={review.date}
        />
      );
    })}
  </div>
);

export default Reviews;
