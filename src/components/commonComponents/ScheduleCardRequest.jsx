import React, { useState } from "react";
import {Card, Row, Col, Button, Divider, Form, Input, Rate, notification} from "antd";
import {firebaseStore} from "../../config/fbConfig";

export default function ScheduleCardRequest(props) {
  const { newRequest, close, forceUpdate } = props;

  const changeState = (state) => {
    firebaseStore.collection("appointments").doc(newRequest.id).update({
      state: state
    }).then(function() {
      close();
      forceUpdate();
      return notification.success({
        className: "notificationSaved",
        style: {top: "550px"},
        message: "Saved",
        duration: "2",
      });
    });
  };

  return (
    <>
      <Card
        className="scheduleCard"
        actions={[
          <>
            <Button type="text" className="scheduleCardReviewBtn" onClick={()=> {changeState("confirmed")}}>
              Accept
            </Button>
            <Button type="text" className="scheduleCardRebookBtn" onClick={()=> {changeState("declined")}}>
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
