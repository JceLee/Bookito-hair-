import React from "react";
import { Row, Col, Avatar, Divider } from "antd";

export default function MessengerListCard(props) {
  const { fname, photoURL, roomID, enterChatRoom, msgDate, lastMsg } = props;
  const displayDate = msgDate?.slice(0, 10) || " ";
  return (
    <div
      className="messengerCardComponent"
      onClick={() => {
        enterChatRoom(roomID);
      }}
    >
      <div className="photoImage">
        <Avatar className="msgListImage" size={64} src={photoURL} />
      </div>
      <div className="rightSide">
        <Row className="NameAndDate">
          <Col>{fname}</Col>
          <Col>{displayDate}</Col>
        </Row>
        <Row className="textMsg">{lastMsg}</Row>
        <Divider className="msgListDivider" />
      </div>
    </div>
  );
}
