import React from "react";
import { Card, Row, Col, Button, Divider } from "antd";

export default function ScheduleCard(props) {
  const { appointment } = props;
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
        <Col span={4} className="scheduleCardDate">
          {appointment.date}
        </Col>
        <Col span={2}>
          <Divider type="vertical" className="scheduleCardDivider" />
        </Col>
        <Col span={18}>
          <div>Designer: {appointment.designerName}</div>
          <div>
            Time: {appointment.timeStart}-{appointment.timeEnd}
          </div>
          <div>
            Type:{" "}
            {appointment.types.map((type, index) => (
              <span key={index}>{type} </span>
            ))}
          </div>
        </Col>
      </Row>
    </Card>
  );
}
