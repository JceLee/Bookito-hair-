import React,  from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { refresh } from "../../../../../actions/currentUser";
import { firebaseStore } from "../../../../../config/fbConfig";

export default function SelfIntroForm(props) {
  const { designer, createMode } = props;
  const dispatch = useDispatch();

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 8,
    },
  };

  // save profile to db and reload page
  const onFinish = (values) => {
    const updatedInfo = {
      ...designer,
      introduction: values.introduction,
    };
    Object.assign(designer, updatedInfo); // Update local client
    dispatch(refresh(designer)); // Update redux client
    // Update firebase
    firebaseStore
      .collection("users")
      .doc(designer.uid)
      .update({
        introduction: values.introduction,
      })
      .then(function () {
        return message.success({
          content: "Saved",
          duration: "2",
          className: "onFinishMessage",
        });
      });
  };

  const formArea = (
    <Form.Item name={["introduction"]}>
      <Input.TextArea
        className="selfIntroInput"
        placeholder="(Promotion, discount, etc.)"
        // onChange={updateDesigner}
      />
    </Form.Item>
  );

  return (
    <>
      {createMode ? (
        formArea
      ) : (
        <div className="SelfIntroForm">
          <Form {...layout} name="selfIntro" onFinish={onFinish}>
            {formArea}
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
              <Button className="selfIntroSaveBtn" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
}
