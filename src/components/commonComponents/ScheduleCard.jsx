import React from "react";
import { Card, Row, Col, Button, Divider } from "antd";

export default function ScheduleCard(props) {
  const { date, name, time, types } = props;
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
          {date}
        </Col>
        <Col span={2}>
          <Divider type="vertical" className="scheduleCardDivider" />
        </Col>
        <Col span={18}>
          <div>Designer: {name}</div>
          <div>Time: {time}</div>
          <div>
            Type:{" "}
            {types.map((type, index) => (
              <span key={index}>{type} </span>
            ))}
          </div>
        </Col>
      </Row>
    </Card>
  );
}
