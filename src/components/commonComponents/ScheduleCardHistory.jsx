import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Divider } from "antd";
import ReviewModal from "../view/clientScheduleView/ReviewModal";
import { firebaseStore } from "../../config/fbConfig";

export default function ScheduleCardHistory(props) {
  const { appointment } = props;
  const { date, time, designerName, designerId, bookedServices } = appointment;
  const [designer, setDesigner] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    firebaseStore
      .collection("users")
      .doc(designerId)
      .get()
      .then(function (doc) {
        setDesigner(doc.data());
      });
  }, []);

  const modalHandler = () => {
    setVisible(!visible);
  };

  const printServices = () => {
    var services = "";
    Object.entries(bookedServices).map((type) => {
      console.log("type: " + type);
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
            <Button type="text" className="scheduleCardRebookBtn">
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
      <ReviewModal modalHandler={modalHandler} visible={visible} designer={designer} />
    </>
  );
}
