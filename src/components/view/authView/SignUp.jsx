import React, { useState } from "react";
import { Divider, Form, Input, Modal, Button } from "antd";

export default function SignUp() {
  const [isSignUpShowing, setIsSignUpShowing] = useState(false);

  const showSignUpModal = () => {
    setIsSignUpShowing(!isSignUpShowing);
  };

  const handleSignUpOk = () => {
    setIsSignUpShowing(!isSignUpShowing);
  };

  const handleSignUpCancel = () => {
    setIsSignUpShowing(!isSignUpShowing);
  };

  return (
    <div>
      <div className="inputs">
        <Button
          className="signUp"
          type="primary"
          onClick={showSignUpModal}
          shape="round"
        >
          Sign Up
        </Button>
        <Modal
          title="Sign Up"
          visible={isSignUpShowing}
          onOk={handleSignUpOk}
          okText="Agree and Continue"
          onCancel={handleSignUpCancel}
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <Form.Item
            name={["user", "name"]}
            label="Firstname"
            rules={[
              { required: true, message: "Please input your firstname!" },
            ]}
          >
            <Input style={{ width: 180 }} placeholder="Firstname" />
          </Form.Item>
          <Form.Item
            name={["user", "name"]}
            label="Lastname"
            rules={[{ required: true, message: "Please input your lastname!" }]}
          >
            <Input style={{ width: 182 }} placeholder="Lastname" />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input vaild email!",
              },
            ]}
          >
            <Input style={{ width: 275 }} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name={["user", "password"]}
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password style={{ width: 250 }} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name={["user", "location"]}
            label="Location"
            rules={[{ required: true, message: "Please input your location!" }]}
          >
            <Input style={{ width: 256 }} placeholder="Location" />
          </Form.Item>
          <Divider>Or</Divider>
          <br />
        </Modal>
      </div>
    </div>
  );
}
