import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Review from "./Review";
import { firebaseStore } from "../../../../config/fbConfig";

export default function ReviewContainer() {
  const reviews = [];
  const [appointments, setAppointments] = useState([]);
  const designer = useSelector((state) => state.selectedDesigner.selectedDesigner);

  useEffect(() => {
    loadAppointments();
  }, []);

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

  const getReviews = () => {
    appointments.forEach((a) => {
      if (a.review != null) {
        let review = {
          rate: a.review.rate,
          reviewContext: a.review.reviewContext,
        };
        reviews.push(review);
      }
    });
  };

  return (
    <>
      <h2>Reviews</h2>
      {appointments.length == 0 ? "There is no review" : getReviews()}
      {reviews.map((r, inx) => (
        <>
          <div>rate: {r.rate}</div>
          <div>context: {r.reviewContext}</div>
        </>
      ))}
    </>
  );
}
