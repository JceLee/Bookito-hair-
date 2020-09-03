import React, { useState } from "react";
import { Card, Row, Col, Button, Divider, Form, Input, Rate } from "antd";
import Modal from "antd/lib/modal/Modal";
import DesignerCardLeft from "../view/designerListView/designerCardComponent/designerCardTop/DesignerCardTopLeft";

export default function ScheduleCardHistory(props) {
  const { date, name, timeStart, timeEnd, types } = props;
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
            {date}
          </Col>
          <Col span={2}>
            <Divider type="vertical" className="scheduleCardDivider" />
          </Col>
          <Col span={18}>
            <div>Designer: {name}</div>
            <div>
              Time: {timeStart}-{timeEnd}
            </div>
            <div>
              Type:{" "}
              {types.map((type, index) => (
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
          <DesignerCardLeft fname={name} />
        </div>
        <Form>
          <Form.Item name="rating">
            <div>How was the service?</div>
            <Rate />
          </Form.Item>
          <Form.Item name="comment">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
