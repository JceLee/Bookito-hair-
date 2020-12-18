import React, { useRef, useState } from "react";
import { Card, Row, Col, Button, Divider } from "antd";
import { firebaseStore } from "../../config/fbConfig";
import { useDispatch } from "react-redux";
import ReviewModal from "../view/clientScheduleView/ReviewModal";
import BookNowModal from "../view/designerProfileView/designerProfileTop/bookNowModal/BookNowModal";
import { select_designer } from "../../actions/selectedDesignerAction";

export default function ScheduleCardHistory(props) {
  const dispatch = useDispatch();
  // const fetched = useRef(false);
  const { appointment } = props;
  const { date, time, designerName, bookedServices, designerId } = appointment;
  const [visibleReviewModal, setVisibleReviewModal] = useState(false);
  const [visibleBookNowModal, setVisibleBookNowModal] = useState(false);

  const getDesigner = () => {
    firebaseStore
      .collection("users")
      .doc(designerId)
      .get()
      .then((snapshot) => {
        // if (!fetched.current) {
        dispatch(select_designer(snapshot.data()));
        // fetched.current = true;
        // }
      });
  };

  const reviewModalHandler = () => {
    setVisibleReviewModal(!visibleReviewModal);
  };

  const bookModalHandler = () => {
    setVisibleBookNowModal(!visibleBookNowModal);
  };

  const openBookNowModal = () => {
    getDesigner();
    bookModalHandler();
  };

  const printServices = () => {
    var services = "";
    Object.entries(bookedServices).map((type) => {
      services += type[1].service;
    });
    return services;
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
              {/* <Button type="text" className="scheduleCardRebookBtn"> */}
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
            <div>Service(s): {printServices()}</div>
          </Col>
        </Row>
      </Card>
      <ReviewModal
        modalHandler={reviewModalHandler}
        visible={visibleReviewModal}
        appointment={appointment}
      />
      <BookNowModal visible={visibleBookNowModal} modalHandler={bookModalHandler} />
    </>
  );
}
