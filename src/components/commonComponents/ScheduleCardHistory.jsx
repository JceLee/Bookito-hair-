import React, {useEffect, useState} from "react";
import { Card, Row, Col, Button, Divider, Form, Input, Rate } from "antd";
import Modal from "antd/lib/modal/Modal";
import DesignerCardLeft from "../view/designerListView/designerCardComponent/designerCardTop/DesignerCardTopLeft";
import {firebaseStore} from "../../config/fbConfig";

export default function ScheduleCardHistory(props) {
  const { date, name, time, types, designerId } = props;
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
        closable={false}
        destroyOnClose={true}
        width={800}
        footer={[
          <>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </>
        ]}
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
