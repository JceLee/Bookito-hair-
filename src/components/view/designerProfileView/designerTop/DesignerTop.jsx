import React, { useState, useEffect, useRef } from "react";
import {
  Affix,
  Button,
  Modal,
  Form,
  Collapse,
  notification,
  message,
} from "antd";
import DesignerNav from "./designerNav/DesignerNav.jsx";
import ReadOnlyStar from "../../../commonComponents/ReadOnlyStar";
import ServiceNPriceForm from "../designerEditProfile/ServiceNPriceForm";
import HoursForm from "../designerEditProfile/HoursForm";
import AddressPhoneForm from "../designerEditProfile/AddressPhoneForm";
import WorksForm from "../designerEditProfile/WorksForm";
import BookNowModal from "../../designerProfileView/designerTop/bookNowModal/BookNowModal";
import Avatar from "antd/lib/avatar/avatar";

const { Panel } = Collapse;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

const validateMessages = {
  required: "Required",
  types: {
    number: "Invalid",
  },
  number: {
    range: "Invalid",
  },
};

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const DesignerTop = (props) => {
  const {
    isAuthenticated,
    fname,
    lname,
    img,
    totalRate,
    works,
    hours,
    location,
  } = props;
  const [top] = useState(64);
  const [height, setHeight] = useState(0);
  const [Visible, setVisible] = useState(false);

  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    Visible,
  });

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log(values);
    // return message
    //   .success({
    //     content: "Saved",
    //     duration: "1",
    //   })
    //   .then(() => setVisible(false));
    setVisible(false);
    return notification.success({
      className: "notificationSaved",
      style: { top: "550px" },
      message: "Saved",
      duration: "2",
    });
  };

  const onFinishFailed = (errors) => {
    console.log(errors);
  };

  const onOk = () => {
    form.submit();
  };

  useEffect(() => {
    setHeight(document.getElementById("tabWithButton").clientHeight);
  }, [height]);

  return (
    <div className="designerTop" id="designerTop">
      <div className="designerProfile">
        <Avatar className="designerProfileImage" size={64} src={img} />
        <div className="designerNameRateLocation">
          <h2>
            {fname} {lname}
          </h2>
          <ReadOnlyStar rate={totalRate} />
          <p>{location}</p>
        </div>
      </div>
      <Affix offsetTop={top}>
        <div className="tabWithButton" id="tabWithButton">
          <DesignerNav height={height} />
          {isAuthenticated ? (
            <>
              <Button className="buttonInProfileLayoutTab" onClick={showModal}>
                Edit Profile
              </Button>
              <Modal
                className="editProfileModal"
                visible={Visible}
                title="Edit Profile"
                onOk={onOk}
                onCancel={handleCancel}
                destroyOnClose={true}
                footer={
                  <Button
                    className="saveBtnInEditProfile"
                    key="submit"
                    onClick={onOk}
                  >
                    Save
                  </Button>
                }
              >
                <Form
                  {...layout}
                  form={form}
                  name="editProfile"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  initialValues={{
                    services: {
                      Cut: [],
                      Style: [],
                      Perm: [],
                      Color: [],
                      Clinic: [],
                      Promo: [],
                    },
                    hours: {
                      Mon: [{ tradingHours: [16, 42], closed: false }],
                      Tue: [{ tradingHours: [16, 42], closed: false }],
                      Wed: [{ tradingHours: [16, 42], closed: false }],
                      Thu: [{ tradingHours: [16, 42], closed: false }],
                      Fri: [{ tradingHours: [16, 42], closed: false }],
                      Sat: [{ tradingHours: [16, 42], closed: false }],
                      Sun: [{ tradingHours: [16, 42], closed: false }],
                    },
                    addressPhone: {
                      street: "",
                      unit: "",
                      city: "",
                      postalCode: "",
                      province: "",
                      phone: "",
                    },
                  }}
                  validateMessages={validateMessages}
                  scrollToFirstError
                >
                  <Collapse bordered={false} defaultActiveKey={["1"]}>
                    <Panel header="Service & Price" key="1">
                      <ServiceNPriceForm />
                    </Panel>
                    <Panel header="Hours" key="2">
                      <HoursForm />
                    </Panel>
                    <Panel header="Address & Phone" key="3">
                      <AddressPhoneForm />
                    </Panel>
                    <Panel header="Works" key="4">
                      <WorksForm works={works} />
                    </Panel>
                  </Collapse>
                </Form>
              </Modal>
            </>
          ) : (
            <BookNowModal hours={hours} />
          )}
        </div>
      </Affix>
    </div>
  );
};

export default DesignerTop;
