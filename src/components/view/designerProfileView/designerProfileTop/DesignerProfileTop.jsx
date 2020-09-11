import React, { useState, useEffect } from "react";
import { Affix, Button, Modal, Form, Collapse, notification } from "antd";
import DesignerNav from "./designerNav/DesignerNav.jsx";
import ReadOnlyStar from "../../../commonComponents/ReadOnlyStar";
import ServiceNPriceForm from "./designerEditProfile/ServiceNPriceForm";
import HoursForm from "./designerEditProfile/HoursForm";
import AddressPhoneForm from "./designerEditProfile/AddressPhoneForm";
import WorksForm from "./designerEditProfile/WorksForm";
import DesignerSchedule from "../../designerScheduleView/DesignerScheduleView";
import Avatar from "antd/lib/avatar/avatar";

const defaultStartTime = 16; // 08:00
const defaultEndTime = 42; // 21:00
const defaultTradingHours = [defaultStartTime, defaultEndTime];
const searchBarHeight = 64;
const avatarSize = 64;
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
const formInitialValues = {
  services: {
    Cut: [],
    Style: [],
    Perm: [],
    Color: [],
    Clinic: [],
    Promo: [],
  },
  hours: {
    Mon: [{ tradingHours: defaultTradingHours, closed: false }],
    Tue: [{ tradingHours: defaultTradingHours, closed: false }],
    Wed: [{ tradingHours: defaultTradingHours, closed: false }],
    Thu: [{ tradingHours: defaultTradingHours, closed: false }],
    Fri: [{ tradingHours: defaultTradingHours, closed: false }],
    Sat: [{ tradingHours: defaultTradingHours, closed: false }],
    Sun: [{ tradingHours: defaultTradingHours, closed: false }],
  },
  addressPhone: {
    street: "",
    unit: "",
    city: "",
    postalCode: "",
    province: "",
    phone: "",
  },
};

export default function DesignerProfileTop(props) {
  const {
    isAuthenticated,
    fname,
    lname,
    img,
    totalRate,
    works,
    hours,
    location,
    services,
  } = props;
  const [stickyNavPositionFromTop] = useState(searchBarHeight);
  const [height, setHeight] = useState(0);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const editProfilePanels = [
    {
      header: "Service & Price",
      content: <ServiceNPriceForm services={services} />,
    },
    {
      header: "Hours",
      content: <HoursForm defaultTradingHours={defaultTradingHours} />,
    },
    { header: "Address & Phone", content: <AddressPhoneForm /> },
    { header: "Works", content: <WorksForm works={works} /> },
  ];

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log(values);
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
    <div className="designerTop">
      <div className="designerProfile">
        <Avatar className="designerProfileImage" size={avatarSize} src={img} />
        <div className="designerNameRateLocation">
          <h2>
            {fname} {lname}
          </h2>
          <ReadOnlyStar rate={totalRate} />
          <p>{location}</p>
        </div>
      </div>
      <Affix offsetTop={stickyNavPositionFromTop}>
        <div id="tabWithButton">
          <DesignerNav searchBarHeight={searchBarHeight} height={height} />
          {isAuthenticated ? (
            <>
              <Button className="buttonInProfileLayoutTab" onClick={showModal}>
                Edit Profile
              </Button>
              <Modal
                className="editProfileModal"
                visible={visible}
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
                  initialValues={formInitialValues}
                  validateMessages={validateMessages}
                  scrollToFirstError
                >
                  <Collapse bordered={false} defaultActiveKey={["1"]}>
                    {editProfilePanels.map((panel, index) => {
                      return (
                        <Panel header={panel.header} key={index + 1}>
                          {panel.content}
                        </Panel>
                      );
                    })}
                  </Collapse>
                </Form>
              </Modal>
            </>
          ) : (
            <DesignerSchedule hours={hours} />
          )}
        </div>
      </Affix>
    </div>
  );
}
