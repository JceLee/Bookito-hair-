import React from "react";
import {Card, Row, Col, Button, Divider, notification} from "antd";
import {MessageOutlined} from "@ant-design/icons";
import {firebaseStore} from "../../config/fbConfig";
import {CreateMessengerRoom} from "../view/messengerView/CreateMessengerRoom";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom"

export default function ScheduleCard(props) {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const {appointment, printServices} = props;
  const {designerName, date, time, bookedServices, designerId} = appointment;

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
          style: {top: "550px"},
          message: "Canceled",
          duration: "2",
        });
      });
  }

  const history = useHistory();

  const enterChatRoom = (roomID) => {
    console.log("2");
    history.push(`/chatroom?roomID=${roomID}`);
  };

  const sendMessageToAdmin = (designerId) => {
    console.log("1");
    enterChatRoom(CreateMessengerRoom(currentUser.uid, designerId));
  }

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
          <Divider type="vertical" className="scheduleCardDivider"/>
        </Col>
        <Col span={18}>
          <div>Designer: {designerName}<span onClick={() => sendMessageToAdmin(designerId)}><MessageOutlined/></span>
          </div>
          <div>Time: {time}</div>
          <div>Type: {printServices(bookedServices)}</div>
        </Col>
      </Row>
    </Card>
  );
}
