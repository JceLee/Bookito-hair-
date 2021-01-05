import React, { useState} from "react";
import {Form, Input, Button, message} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {refresh} from "../../../../../actions/currentUser";
import { firebaseStore} from "../../../../../config/fbConfig";

export default function SelfIntroForm() {
  const [client, setClient] = useState(
    useSelector((state) => state.currentUser.currentUser));
  const dispatch = useDispatch();

  // save profile to db and reload page
  const saveProfile = (values) => {
    console.log(client.uid);
    console.log(values.introduction);
    const updatedInfo = {
      ...client,
      introduction: values.introduction,
    };
    setClient(updatedInfo);
    dispatch(refresh(updatedInfo));
    // window.location.reload(false);
    firebaseStore
      .collection("users")
      .doc(client.uid)
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

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 8,
    },
  };

  const onFinish = (value) => {
    saveProfile(value);
  }

  return (
    <div className="SelfIntroForm">
      <Form {...layout} name="selfIntro" onFinish={onFinish}>
        <Form.Item name={['introduction']}>
          <Input.TextArea className="selfIntroInput" placeholder="(Promotion, discount, etc.)"/>
        </Form.Item>
        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 6}}>
          <Button className="selfIntroSaveBtn" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
