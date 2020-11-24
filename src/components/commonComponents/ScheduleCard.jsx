import React, { useState } from "react";
import { Card, Row, Col, Button, Divider, Modal } from "antd";
import { MessageOutlined } from '@ant-design/icons';

export default function ScheduleCard(props) {
  const { date, name, time, types } = props;

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  const convertDate = (date) => {
    let sDate = date.split(" ");
    let newDate = sDate[0] + "\n" + sDate[1] + " " + sDate[2] + "\n" + sDate[3];
    
    return newDate;
  }

  return (
    <>
      <Card
          className="scheduleCard"
          actions={[
            <Button type="text" className="scheduleCardEditBtn" onClick={showModal}>
              View details
            </Button>,
          ]}
      >
        <div id="messageIconWrapper">Message to designer<MessageOutlined id="messageIcon"/></div>
        <Row>
          <Col span={6} className="scheduleCardDate">
            {convertDate(date)}
          </Col>
          <Col span={2}>
            <Divider type="vertical" className="scheduleCardDivider" />
          </Col>
          <Col span={16}>
            <div>Designer: {name}</div>
            <div>
              Time: {time}
            </div>
            <div>
              Service :{" "}
              {types.map((type, index) => (
                  <span key={index}>{type} </span>
              ))}
            </div>
          </Col>
        </Row>
      </Card>

      <Modal
        className="scheduleDetailModal"
        title="Appointment Detail"
        closable={false}
        visible={visible}
        footer={[
          <Button key="back" onClick={handleCancel} id="scheduleDetailFooterBtn">
            CLOSE
          </Button>
        ]}    
      >
        <p>Test</p>
      </Modal>
    </>
  );
}
