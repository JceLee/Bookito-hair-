import React from "react";
import { Card, Row, Col, Button, Divider } from "antd";

export default function ScheduleCard(props) {
  const { appointment, printServices } = props;
  const { designerName, date, time, bookedServices } = appointment;

  return (
    <Card
      className="scheduleCard"
      actions={[
        <Button type="text" className="scheduleCardEditBtn">
          Edit Schedule
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
