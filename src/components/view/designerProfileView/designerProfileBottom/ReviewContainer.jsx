import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
import Review from "./Review";
import { firebaseStore } from "../../../../config/fbConfig";

const defaultCurrent = 1;
// let numEachPage = 3;

export default function ReviewContainer(props) {
  const { id } = props;
  const reviews = [];
  const [appointments, setAppointments] = useState([]);
  const designer = useSelector((state) => state.selectedDesigner.selectedDesigner);
  const [numEachPage, setNumEachPage] = useState(3);

  useEffect(() => {
    loadAppointments();
    // newNumEachPage();
  }, []);

  // const newNumEachPage = () => {
  //   if (window.innerWidth >= 1024) {
  //     setNumEachPage(4);
  //   }
  // };

  const loadAppointments = () => {
    const fbData = [];
    firebaseStore
      .collection("appointments")
      .where("designerId", "==", designer.uid)
      .get()
      .then((querySnapshot) => {
        for (const [k, v] of Object.entries(querySnapshot.docs)) {
          fbData.push(v.data());
        }
        return fbData;
      })
      .then((data) => {
        setAppointments(data);
      });
  };

  const [reviewNum, setReviewNum] = useState({ minValue: 0, maxValue: numEachPage });

  const getReviews = () => {
    appointments.forEach((a) => {
      if (a.review != null) {
        let review = {
          customerName: a.customerName,
          rate: a.review.rate,
          reviewContext: a.review.reviewContext,
          date: a.date,
        };
        reviews.push(review);
      }
    });
    let numOfPlaceHolder = numEachPage - (reviews.length % numEachPage);
    for (let i = 0; i < numOfPlaceHolder; i++) {
      let reviewPlaceHolder = {
        customerName: "",
        rate: "",
        reviewContext: "",
        date: "",
      };
      reviews.push(reviewPlaceHolder);
    }
  };

  const handleChange = (value) => {
    setReviewNum({ minValue: (value - 1) * numEachPage, maxValue: value * numEachPage });
  };

  return (
    <div className="reviewContainer" id={id}>
      <h2 id="reviewTitle">Reviews</h2>
      {appointments.length === 0 ? "There is no review" : getReviews()}
      {reviews.slice(reviewNum.minValue, reviewNum.maxValue).map((review, index) => (
        <Review
          key={index}
          customerName={review.customerName}
          rate={review.rate}
          comment={review.reviewContext}
          date={review.date}
        />
      ))}
      <Pagination
        defaultCurrent={defaultCurrent}
        pageSize={numEachPage}
        onChange={handleChange}
        total={reviews.length}
      />
    </div>
  );
}
