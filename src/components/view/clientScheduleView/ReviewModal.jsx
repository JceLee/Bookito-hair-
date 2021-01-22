import React, { useState } from "react";
import DesignerCardLeft from "../designerListView/designerCardComponent/designerCardTop/DesignerCardTopLeft";
import { Modal, Form, Input, Button } from "antd";
import { useSelector } from "react-redux";
import { StarRate } from "../../commonComponents/StarRate";
import { firebaseStore } from "../../../config/fbConfig";

export default function ReviewModal(props) {
  const designer = useSelector((state) => state.selectedDesigner.selectedDesigner);
  const { modalHandler, visible, appointment, disableReviewBtn } = props;
  const [rate, setRate] = useState(0);
  const [reviewContext, setReviewContext] = useState("asdfas");

  const createFooter = () => {
    return (
      <>
        <Button on key="back" id="reviewModalCancelBtn" onClick={modalHandler}>
          Cancel
        </Button>
        <Button
          key="submit"
          id="reviewModalSubmitBtn"
          onClick={() => {
            addReviewToDB();
            disableReviewBtn();
          }}
        >
          Submit
        </Button>
      </>
    );
  };

  const getRateValue = (rateValue) => {
    setRate(rateValue);
  };

  const getReviewContext = (e) => {
    setReviewContext(e.target.value);
  };

  const constructReview = () => {
    const review = {
      rate: rate,
      reviewContext: reviewContext,
    };
    // reset data
    setReviewContext("");
    setRate(0);
    return review;
  };

  const addReviewToDB = async () => {
    const appointmentRef = firebaseStore.collection("appointments").doc(appointment.aid);
    appointmentRef.get().then((res) => {
      if (res.exists) {
        appointmentRef.update({
          review: constructReview(),
        });
      }
    });
    modalHandler();
  };

  return (
    <Modal
      className="reviewModal"
      title="Review"
      visible={visible}
      destroyOnClose={true}
      onCancel={modalHandler}
      footer={[createFooter()]}
    >
      {designer !== null && (
        <DesignerCardLeft fname={designer.fname} profile={designer.photoURL} rate={designer.rate} />
      )}

      <Form id="reviewForm">
        <Form.Item name="rate" className="reviewRateItem">
          <div>Rate Services</div>
          <StarRate onRate={getRateValue} />
        </Form.Item>
        <Form.Item name="comment" className="reviewCommentItem">
          <Input.TextArea
            id="reviewComment"
            placeholder="How did you like the service?"
            onChange={getReviewContext}
            autoSize={true}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
