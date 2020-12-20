import React from "react";
import { Row, Col, Avatar, Divider, Button } from "antd";

export default function MessengerListCard(props) {
  const { fname, photoURL, roomID, enterChatRoom, lastMsg } = props;

  console.log(lastMsg);
  return (
    <div
      className="messengerCardComponent"
      onClick={() => {
        enterChatRoom(roomID);
      }}
    >
      <Row className="photoImage">
        <Col>
          <Avatar size={64} src={photoURL} />
        </Col>
        <Col className="rightSide">
          <div>{fname}</div>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}
