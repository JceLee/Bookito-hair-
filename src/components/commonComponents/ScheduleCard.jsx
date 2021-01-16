import React from "react";
import {Card, Row, Col, Button, Divider, notification} from "antd";
import {firebaseStore} from "../../config/fbConfig";

export default function ScheduleCard(props) {
  const { appointment, printServices } = props;
  const { designerName, date, time, bookedServices } = appointment;

  const changeState = () => {
    firebaseStore
      .collection("appointments")
      .doc(appointment.aid)
      .update({
        state: "DeletedByCustomer",
      })
      .then(function () {
        return notification.success({
          className: "notificationSaved",
          style: { top: "550px" },
          message: "Canceled",
          duration: "2",
        });
      });}

  return (
    <Card
      className="scheduleCard"
      actions={[
        <Button type="text" className="scheduleCardEditBtn" onClick={changeState}>
          Cancel Schedule
        </Button>,
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
          <div>Type: {printServices(bookedServices)}</div>
        </Col>
      </Row>
    </Card>
  );
}
