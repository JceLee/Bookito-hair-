import React, {useEffect, useState} from "react";
import { Card, Row, Col, Button, Divider, Form, Input, Rate } from "antd";
import Modal from "antd/lib/modal/Modal";
import DesignerCardLeft from "../view/designerListView/designerCardComponent/designerCardTop/DesignerCardTopLeft";
import {firebaseStore} from "../../config/fbConfig";
import {useSelector} from "react-redux";

export default function ScheduleCardHistory(props) {
  const { date, name, time, types, appointmentId, designerId } = props;
  const [visible, setVisible] = useState(false);
  const [designer, setDesigner] = useState(null);

  useEffect(() => {
    firebaseStore
        .collection("users")
        .doc(designerId)
        .get()
        .then(function(doc) {
          setDesigner(doc.data());
        });
  }, []);

  console.log(designer);

  const modalHandler = () => {
    setVisible(!visible);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
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
              Time: {time}
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
        onOk={onFinish}
        destroyOnClose={true}
        width={800}
      >
        <div>
          {designer !== null && <DesignerCardLeft fname={designer.fname} profile={designer.photoURL} rate={designer.rate}/>}
        </div>
        <Form
        >
          <Form.Item
            name="rate"
          >
            <div>How was the service?</div>
            <Rate />
          </Form.Item>
          <Form.Item
             name="comment"
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
