import React, { useState, useEffect } from "react";
import { Button, Space } from "antd";
import { Link } from "react-scroll";
import Review from "./Review";

const reviewsPerClick = 2;
let reviewsArray = [];

const Reviews = (props) => {
  let { id, reviews } = props;
  const [arrayReviewsToShow, setarrayReviewsToShow] = useState([]);
  const [next, setNext] = useState(reviewsPerClick);
  const [Collapsed, setCollapsed] = useState({
    collapsedAllReviews: true,
    collapsedComment: true,
  });

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
    setCollapsed({ collapsedAllReviews: false, collapsedComment: true });
  };

  const handleShowLessReviews = () => {
    displayInitialReviews();
    setNext(reviewsPerClick);
    setCollapsed({ collapsedAllReviews: true, collapsedComment: true });
  };

  return (
    <div className="reviews" id={id}>
      <h2>Reviews ({reviews.length})</h2>
      {reviews.length === 0 ? (
        <h3>No reviews yet...</h3>
      ) : (
        arrayReviewsToShow.map((review, customerId) => {
          const { customerName, photos, rate, comment, date } = review;
          return (
            <Review
              key={customerId}
              customerName={customerName}
              photos={photos}
              rate={rate}
              comment={comment}
              date={date}
              collapsed={Collapsed}
            />
          );
        })
      )}

      <Space>
        {reviews.length >= next && (
          <Button
            className="Button"
            type="primary"
            onClick={handleShowMoreReviews}
          >
            Load More
          </Button>
        )}

        {arrayReviewsToShow.length > reviewsPerClick && (
          <Link
            activeClass="active"
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            // offset={-121 * 1.75}
            offset={-48 * 2.25}
          >
            <Button
              className="Button"
              type="primary"
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
