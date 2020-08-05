import React, { useState, useEffect } from 'react';
import Review from './Review';
import { Button } from 'antd';

const reviewsPerClick = 2;
let reviewsArray = [];

const Reviews = (props) => {
  const [arrayReviewsToShow, setarrayReviewsToShow] = useState([]);
  const [next, setNext] = useState(reviewsPerClick);

  const loopWithSlice = (start, end) => {
    const slicedReviews = props.reviews.slice(start, end);
    reviewsArray = reviewsArray.concat(slicedReviews);
    setarrayReviewsToShow(reviewsArray);
  };

  const displayInitialReviews = () => {
    reviewsArray.splice(reviewsPerClick);
    setarrayReviewsToShow(reviewsArray);
  };

  useEffect(() => {
    loopWithSlice(0, reviewsPerClick);
  }, []);

  const handleShowMoreReviews = () => {
    loopWithSlice(next, next + reviewsPerClick);
    setNext(next + reviewsPerClick);
  };

  const handleShowLessReviews = () => {
    displayInitialReviews();
    setNext(reviewsPerClick);
  };

  return (
    <div className='reviews' id={props.id}>
      <h2>Reviews ({props.reviews.length})</h2>
      {props.reviews.length === 0 ? (
        <h3>No reviews yet...</h3>
      ) : (
        arrayReviewsToShow.map((review, customerId) => (
          <Review
            key={customerId}
            customerName={review.customerName}
            photos={review.photos}
            rate={review.rate}
            review={review.review}
            date={review.date}
          />
        ))
      )}

      {props.reviews.length >= next && (
        <Button
          className='Button'
          type='primary'
          shape='round'
          onClick={handleShowMoreReviews}
        >
          Load More
        </Button>
      )}

      {arrayReviewsToShow.length > reviewsPerClick && (
        <Button
          className='Button'
          type='primary'
          shape='round'
          onClick={handleShowLessReviews}
        >
          Load Less
        </Button>
      )}
    </div>
  );
};
export default Reviews;
