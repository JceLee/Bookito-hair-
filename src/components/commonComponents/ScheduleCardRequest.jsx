import React, { useState } from "react";
import { Card, Row, Col, Button, Divider, Form, Input, Rate } from "antd";
import DesignerCardLeft from "../view/designerListView/designerCardComponent/designerCardTop/DesignerCardTopLeft";

export default function ScheduleCardRequest(props) {
  const { newRequest } = props;

  return (
    <>
      <Card
        className="scheduleCard"
        actions={[
          <>
            <Button type="text" className="scheduleCardReviewBtn">
              Accept
            </Button>
            <Button type="text" className="scheduleCardRebookBtn">
              Decline
            </Button>
          </>,
        ]}
      >
        <Row>
          <Col span={4} className="scheduleCardDate">
            {newRequest.date}
          </Col>
          <Col span={2}>
            <Divider type="vertical" className="scheduleCardDivider" />
          </Col>
          <Col span={18}>
            <div>Client: {newRequest.clientName}</div>
            <div>
              Time: {newRequest.timeStart}-{newRequest.timeEnd}
            </div>
            <div>
              Type:{" "}
              {newRequest.types.map((type, index) => (
                <span key={index}>{type} </span>
              ))}
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
