import React, { useState, useEffect } from 'react';
import { Button, Space } from 'antd';
import { Link } from 'react-scroll';
import Review from './Review';

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

  const { id, reviews } = props;
  return (
    <div className='reviews' id={id}>
      <h2>Reviews ({reviews.length})</h2>
      {reviews.length === 0 ? (
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

      <Space>
        {reviews.length >= next && (
          <Button
            className='Button'
            type='primary'
            onClick={handleShowMoreReviews}
          >
            Load More
          </Button>
        )}

        {arrayReviewsToShow.length > reviewsPerClick && (
          <Link
            activeClass='active'
            to='reviews'
            spy={true}
            smooth={true}
            duration={500}
            // offset={-121 * 1.75}
            offset={-48 * 2.25}
          >
            <Button
              className='Button'
              type='primary'
              onClick={handleShowLessReviews}
            >
              Load Less
            </Button>
          </Link>
        )}
      </Space>
    </div>
  );
};

export default Reviews;
