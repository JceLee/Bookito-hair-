import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Divider } from "antd";
import { firebaseStore } from "../../config/fbConfig";
import { useSelector } from "react-redux";
import ReviewModal from "../view/clientScheduleView/ReviewModal";
import BookNowModal from "../view/designerProfileView/designerProfileTop/bookNowModal/BookNowModal";

export default function ScheduleCardHistory(props) {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const { appointment } = props;
  const { date, time, designerName, bookedServices, designerId } = appointment;
  const [hours, setHours] = useState(null);
  const [designer, setDesigner] = useState(null);
  const [visibleReviewModal, setVisibleReviewModal] = useState(false);
  const [visibleBookNowModal, setVisibleBookNowModal] = useState(false);

  useEffect(() => {
    firebaseStore
      .collection("users")
      .doc(designerId)
      .get()
      .then(function (doc) {
        setDesigner(doc.data());
      });
  }, [designerId]);

  const modalHandler = () => {
    setVisibleReviewModal(!visibleReviewModal);
  };

  const openBookNowModal = () => {
    for (const [k, v] of Object.entries(designer)) {
      console.log(`${k} - ${v}`);
      if (k === "hours") setHours(v);
    }
    setVisibleBookNowModal(!visibleBookNowModal);
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
            <Button type="text" className="scheduleCardReviewBtn" onClick={modalHandler}>
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
          <Col span={4} className="scheduleCardDate">
            {date}
          </Col>
          <Col span={2}>
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
        modalHandler={modalHandler}
        visible={visibleReviewModal}
        appointment={appointment}
        designer={designer}
      />
      <BookNowModal
        visible={visibleBookNowModal}
        hours={hours}
        customer={currentUser}
        designer={designer}
      />
    </>
  );
}
