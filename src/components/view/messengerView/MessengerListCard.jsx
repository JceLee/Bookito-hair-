import React from "react";
import { Row, Avatar, Divider, Button } from "antd";

export default function MessengerListCard(props) {
  const { fname, photoURL, roomID, enterChatRoom, lastMsg } = props;

  return (
    <div
      className="messengerCardComponent"
      onClick={() => {
        enterChatRoom(roomID);
      }}
    >
      <Row className="photoImage">
          <Avatar size={64} src={photoURL} />
          <div className="rightSide">
            {fname}
            <br />
            {lastMsg}
          </div>
      </Row>
      <Divider />
    </div>
  );
}
