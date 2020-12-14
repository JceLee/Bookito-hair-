import React, {useState, useEffect} from "react";
import {Affix, Button, Modal, Form, Collapse} from "antd";
import DesignerNav from "./designerNav/DesignerNav.jsx";
import ReadOnlyStar from "../../../commonComponents/ReadOnlyStar";
import ServiceNPriceForm from "./designerEditProfile/ServiceNPriceForm";
import HoursForm from "./designerEditProfile/HoursForm";
import AddressPhoneForm from "./designerEditProfile/AddressPhoneForm";
import WorksForm from "./designerEditProfile/WorksForm";
import BookNowModal from "../designerProfileTop/bookNowModal/BookNowModal";
import Avatar from "antd/lib/avatar/avatar";

const defaultStartTime = 16; // 08:00
const defaultEndTime = 42; // 21:00
const defaultTradingHours = [defaultStartTime, defaultEndTime];
const searchBarHeight = 64;
const avatarSize = 64;
const {Panel} = Collapse;
const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 24},
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
    Menu1: [],
    Menu2: [],
    Menu3: [],
    Menu4: [],
    Menu5: [],
    Menu6: [],
  },
  hours: {
    Mon: [{tradingHours: defaultTradingHours, closed: false}],
    Tue: [{tradingHours: defaultTradingHours, closed: false}],
    Wed: [{tradingHours: defaultTradingHours, closed: false}],
    Thu: [{tradingHours: defaultTradingHours, closed: false}],
    Fri: [{tradingHours: defaultTradingHours, closed: false}],
    Sat: [{tradingHours: defaultTradingHours, closed: false}],
    Sun: [{tradingHours: defaultTradingHours, closed: false}],
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
    totalRate,
    works,
    hours,
    location,
    services,
    customer,
    designer,
    photoURL,
  } = props;
  const [stickyNavPositionFromTop] = useState(searchBarHeight);
  const [height, setHeight] = useState(0);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [client, setClient] = useState(customer);

  const editProfilePanels = [
    {
      header: "Service & Price",
      content: <ServiceNPriceForm services={services} formInitialValues={formInitialValues} layout={layout}/>,
    },
    {
      header: "Hours",
      content: <HoursForm defaultTradingHours={defaultTradingHours} formInitialValues={formInitialValues} layout={layout}/>,
    },
    {header: "Address & Phone",
      content: <AddressPhoneForm formInitialValues={formInitialValues} layout={layout}/>},
    {
      header: "Works",
      content: <WorksForm works={works} client={client} setClient={setClient} layout={layout}/>,
    },
  ];

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    setVisible(false);
    const updatedProfile = {
      services: values.services,
      hours: values.hours,
      addressPhone: values.addressPhone,
      photos: values.fileList,
    };
    console.log(updatedProfile);
    // console.log(
    //   firebaseStore
    //     .collection("users")
    //     .doc(customer.uid)
    //     .get()
    //     .then(function (doc) {
    //       return doc.data();
    //     })
    // );
    // firebaseStore
    //   .collection("users")
    //   .doc(customer.uid)
    //   .set(updatedProfile)
    //   .then(function () {
    //     return message.success({
    //       content: "Saved",
    //       duration: "2",
    //       className: "onFinishMessage",
    //     });
    //   });
  };

  const onFinishFailed = (errors) => {
    console.log(errors);
  };

  const onOk = () => {
    form.submit();
    console.log(form.submit);
    setVisible(false);
  };

  useEffect(() => {
    setHeight(document.getElementById("tabWithButton").clientHeight);
  }, [height]);

  return (
    <div className="designerTop">
      <div className="designerProfile">
        <Avatar className="designerProfileImage" size={avatarSize} src={photoURL}/>
        <div className="designerNameRateLocation">
          <h2>
            {fname} {lname}
          </h2>
          <ReadOnlyStar rate={totalRate}/>
          <p>{location}</p>
        </div>
      </div>
      <Affix offsetTop={stickyNavPositionFromTop}>
        <div id="tabWithButton">
          <DesignerNav searchBarHeight={searchBarHeight} height={height}/>
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
                // width={window.innerWidth * 0.8}
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
                <Collapse
                  className="editProfileCollapse"
                  bordered={false}
                  defaultActiveKey={["1"]}
                >
                  {editProfilePanels.map((panel, index) => {
                    return (
                      <Panel
                        className="editProfilePanel"
                        header={panel.header}
                        key={index + 1}
                      >
                        {panel.content}
                      </Panel>
                    );
                  })}
                </Collapse>
              </Modal>
            </>
          ) : (
            <BookNowModal
              hours={hours}
              customer={customer}
              designer={designer}
            />
          )}
        </div>
      </Affix>
    </div>
  );
}
