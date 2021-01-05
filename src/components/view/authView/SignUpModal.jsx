import React, {useState} from "react";
import {Divider, Form, Input, Modal, Button, Select} from "antd";
import {firebaseAuth, firebaseStore} from "../../../config/fbConfig";
import {
  sign_in_with_facebook,
} from "../../../actions/currentUser";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import firebase from "firebase/app";

export default function SignUpModal(props) {
  const {title} = props;
  const [isSignUpShowing, setIsSignUpShowing] = useState(false);
  const dispatch = useDispatch();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const faceBookProvider = new firebase.auth.FacebookAuthProvider();
  const {Option} = Select;
  const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
  };
  const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
  };

  const [form] = Form.useForm();

  const onUserTypeChange = (value) => {
    switch (value) {
      case "customer":
        form.setFieldsValue({note: "Hi, man!"});
        return;
      case "hairDesigner":
        form.setFieldsValue({note: "Hi, lady!"});
        return;
      case "nailDesigner":
        form.setFieldsValue({note: "Hi there!"});
        return;
      case "lashDesigner":
        form.setFieldsValue({note: "Hi there!"});
        return;
    }
  };

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({note: "Hi, man!"});
        return;
      case "female":
        form.setFieldsValue({note: "Hi, lady!"});
        return;
      case "other":
        form.setFieldsValue({note: "Hi there!"});
        return;
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const showSignUpModal = () => {
    setIsSignUpShowing(!isSignUpShowing);
  };

  const handleSignUpCancel = () => {
    setIsSignUpShowing(!isSignUpShowing);
  };

  const signUpWithFaceBook = () => {
    firebaseAuth
      .signInWithPopup(faceBookProvider)
      .then(function (result) {
        // The signed-in user info.
        const user = result.user;
        console.log("facebook1");
        console.log(user);
        console.log("facebook12");
        generateUserDocument(user).then(function (result) {
          dispatch(sign_in_with_facebook(result));
        });
      })
      .catch(function (error) {
        console.log("22");
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
      })
      .then(function () {
        handleSignUpCancel();
        directProfile();
      });
  };

  const generateUserDocument = async (user) => {
    if (!user) return;
    const userRef = firebaseStore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const {email, displayName, photoURL, uid} = user;
      const isDesigner = false;
      const fname = "";
      const lname = "";
      const location = "";
      const phone = "";
      const gender = "";
      const hours = {
        // Mon: [{ tradingHours: [16, 42], closed: false }],
        // Tue: [{ tradingHours: [16, 42], closed: false }],
        // Wed: [{ tradingHours: [16, 42], closed: false }],
        // Thu: [{ tradingHours: [16, 42], closed: false }],
        // Fri: [{ tradingHours: [16, 42], closed: false }],
        // Sat: [{ tradingHours: [16, 42], closed: false }],
        // Sun: [{ tradingHours: [16, 42], closed: false }],
      };
      const services = {
        // Cut: [
        //   { serviceName: "female cut", price: 35, description: "sample data" },
        // ],
        // Style: [],
        // Perm: [],
        // Color: [],
        // Clinic: [],
        // Promo: [],
      };
      try {
        await userRef.set({
          isDesigner,
          displayName,
          email,
          photoURL,
          fname,
          lname,
          phone,
          gender,
          hours,
          services,
          uid,
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };

  const getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
      const userDocument = await firebaseStore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data(),
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  const history = useHistory();

  const directProfile = () => {
    history.push("/client_profile");
  };

  return (
    <div>
      <div>
        <p onClick={showSignUpModal}>{title}</p>
        <Modal
          className="loginModal"
          title="Sign Up"
          visible={isSignUpShowing}
          onCancel={handleSignUpCancel}
          cancelButtonProps={{style: {display: "none"}}}
        >
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item
              name="type"
              label="Choose your account type"
              rules={[{required: true}]}
            >
              <Select
                placeholder="Choose your account type"
                onChange={onUserTypeChange}
                allowClear
              >
                <Option value="customer">Customer</Option>
                <Option value="hairDesigner">Hair Designer</Option>
                <Option value="nailDesigner">NailArt Designer</Option>
                <Option value="lashDesigner">Lash Designer</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{required: true}]}
            >
              <Select
                placeholder="Select a option and change input text above"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Phone"
              rules={[{required: true}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[{required: true}]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.gender !== currentValues.gender
              }
            >
              {({getFieldValue}) => {
                return getFieldValue("type") === "other" ? (
                  <Form.Item
                    name="customerType"
                    label="Customize Gender"
                    rules={[{required: true}]}
                  >
                    <Input/>
                  </Form.Item>
                ) : null;
              }}
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
