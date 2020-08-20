import React, { useState } from "react";
import { Card, Row, Col, Button, Divider, Form, Input, Rate } from "antd";
import Modal from "antd/lib/modal/Modal";
import DesignerCardLeft from "../view/designerListView/designerCardComponent/designerCardTop/DesignerCardTopLeft";

export default function ScheduleCardHistory(props) {
  const { appointment } = props;
  const [visible, setVisible] = useState(false);
  const modalHandler = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Card
        className="scheduleCard"
        actions={[
          <>
            <Button
              type="text"
              className="scheduleCardReviewBtn"
              onClick={modalHandler}
            >
              Review
            </Button>
            <Button type="text" className="scheduleCardRebookBtn">
              Rebook
            </Button>
          </>,
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

      {/* modal */}
      <Modal
        title="Review"
        visible={visible}
        onCancel={modalHandler}
        destroyOnClose={true}
        width={800}
      >
        <div>
          <DesignerCardLeft fname={appointment.designerName} />
        </div>
        <Form>
          <Form.Item>
            <div>How was the service?</div>
            <Rate />
          </Form.Item>
          <Form.Item>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
