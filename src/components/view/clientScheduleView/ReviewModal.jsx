import React from "react";
import DesignerCardLeft from "../designerListView/designerCardComponent/designerCardTop/DesignerCardTopLeft";
import { Modal, Form, Input, Rate, Button } from "antd";

export default function ReviewModal(props) {
  const { modalHandler, visible, designer } = props;

  const onFinish = (values) => {
    console.log("designer: " + designer.email);
    // console.log("Success:", values);
  };

  const createFooter = () => {
    return (
      <>
        <Button key="back" id="reviewModalCancelBtn" onClick={modalHandler}>
          Cancel
        </Button>
        <Button key="submit" id="reviewModalSubmitBtn" onClick={onFinish}>
          Submit
        </Button>
      </>
    );
  };

  return (
    <Modal
      className="reviewModal"
      title="Review"
      visible={visible}
      destroyOnClose={true}
      bodyStyle={{ padding: "15px" }}
      footer={[createFooter()]}
    >
      {designer !== null && (
        <DesignerCardLeft fname={designer.fname} profile={designer.photoURL} rate={designer.rate} />
      )}

      <Form id="reviewForm">
        <Form.Item name="rate" className="reviewRateItem">
          <div>Rate Services</div>
          <Rate />
        </Form.Item>
        <Form.Item name="comment" className="reviewCommentItem">
          <Input.TextArea id="reviewComment" placeholder="How did you like the service?" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
