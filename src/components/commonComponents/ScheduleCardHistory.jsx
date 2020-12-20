import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Divider } from "antd";
import { firebaseStore } from "../../config/fbConfig";
import { useDispatch } from "react-redux";
import ReviewModal from "../view/clientScheduleView/ReviewModal";
import BookNowModal from "../view/designerProfileView/designerProfileTop/bookNowModal/BookNowModal";
import { select_designer } from "../../actions/selectedDesignerAction";

export default function ScheduleCardHistory(props) {
  const dispatch = useDispatch();
  const { appointment, cardInx, printServices } = props;
  const { date, time, designerName, bookedServices, designerId } = appointment;
  const [visibleReviewModal, setVisibleReviewModal] = useState(false);
  const [visibleBookNowModal, setVisibleBookNowModal] = useState(false);

  useEffect(() => {
    function dispatchDesigner() {
      firebaseStore
        .collection("users")
        .doc(designerId)
        .get()
        .then((snapshot) => {
          dispatch(select_designer(snapshot.data()));
        });
    }
  }, []);

    dispatchDesigner();
  }, [designerId]);

  useEffect(() => {
    function manageReviews() {
      firebaseStore
        .collection("appointments")
        .doc(appointment.aid)
        .get()
        .then((snapshot) => {
          if ("review" in snapshot.data()) disableReviewBtn();
        });
    }
    manageReviews();
  }, [appointment.aid]);

  const reviewModalHandler = () => {
    setVisibleReviewModal(!visibleReviewModal);
  };

  const bookModalHandler = () => {
    setVisibleBookNowModal(!visibleBookNowModal);
  };

  const openBookNowModal = () => {
    bookModalHandler();
  };

  const disableReviewBtn = () => {
    document.getElementsByClassName("scheduleCardReviewBtn")[cardInx].style.background = "#a1a1a1";
    document.getElementsByClassName("scheduleCardReviewBtn")[cardInx].style.color = "#fff";
    document.getElementsByClassName("scheduleCardReviewBtn")[cardInx].disabled = true;
  };

  return (
    <>
      <Card
        className="scheduleCard"
        actions={[
          <>
            <Button type="text" className="scheduleCardReviewBtn" onClick={reviewModalHandler}>
              Review
            </Button>
            <Button type="text" className="scheduleCardRebookBtn" onClick={openBookNowModal}>
              Rebook
            </Button>
          </>,
        ]}
      >
        <Row>
          <Col span={5} className="scheduleCardDate">
            {date}
          </Col>
          <Col span={1}>
            <Divider type="vertical" className="scheduleCardDivider" />
          </Col>
          <Col span={18}>
            <div>Designer: {designerName}</div>
            <div>Time: {time}</div>
            <div>Service(s): {printServices(bookedServices)}</div>
          </Col>
        </Row>
      </Card>
      {/* Review modal */}
      {visibleReviewModal ? (
        <ReviewModal
          modalHandler={reviewModalHandler}
          visible={visibleReviewModal}
          appointment={appointment}
          disableReviewBtn={disableReviewBtn}
          cardInx={cardInx}
        />
      ) : null}

      {/* Book modal */}
      {visibleBookNowModal ? (
        <BookNowModal visible={visibleBookNowModal} modalHandler={bookModalHandler} />
      ) : null}
    </>
  );
}
