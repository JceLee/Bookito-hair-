import React, { useState } from "react";
import { Collapse, Button, Form, message } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ClientProfileView from "../../../view/clientProfileView/ClientProfileView";
import ServiceNPriceForm from "./designerEditProfile/ServiceNPriceForm";
import HoursForm from "./designerEditProfile/HoursForm";
import WorksForm from "./designerEditProfile/WorksForm";
import SelfIntroForm from "./designerEditProfile/SelfIntroForm";
import { firebaseOrigin, firebaseStore } from "../../../../config/fbConfig";
import { refresh } from "../../../../actions/currentUser";

const { Panel } = Collapse;

export default function DesignerProfileCreateEdit(props) {
  const { designer, createMode, selectedDesignerType } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  // Values for WorksForm.jsx
  const [fileList, setFileList] = useState(designer?.works || []);
  const photoURLs = [];

  // Set up hours for new designer
  const defaultStartTime = 16; // 08:00 AM
  const defaultEndTime = 34; // 9:00 PM
  const defaultTradingHours = [defaultStartTime, defaultEndTime];
  if (designer.accountType === "client") {
    designer.hours = {
      Mon: [{ closed: false, tradingHours: defaultTradingHours }],
      Tue: [{ closed: false, tradingHours: defaultTradingHours }],
      Wed: [{ closed: false, tradingHours: defaultTradingHours }],
      Thu: [{ closed: false, tradingHours: defaultTradingHours }],
      Fri: [{ closed: false, tradingHours: defaultTradingHours }],
      Sat: [{ closed: false, tradingHours: defaultTradingHours }],
      Sun: [{ closed: false, tradingHours: defaultTradingHours }],
    };
  }

  const formInitialValues = {
    hours: {
      Mon: [
        {
          tradingHours: designer.hours["Mon"][0]["tradingHours"],
          closed: designer.hours["Mon"][0]["closed"],
        },
      ],
      Tue: [
        {
          tradingHours: designer.hours["Tue"][0]["tradingHours"],
          closed: designer.hours["Tue"][0]["closed"],
        },
      ],
      Wed: [
        {
          tradingHours: designer.hours["Wed"][0]["tradingHours"],
          closed: designer.hours["Wed"][0]["closed"],
        },
      ],
      Thu: [
        {
          tradingHours: designer.hours["Thu"][0]["tradingHours"],
          closed: designer.hours["Thu"][0]["closed"],
        },
      ],
      Fri: [
        {
          tradingHours: designer.hours["Fri"][0]["tradingHours"],
          closed: designer.hours["Fri"][0]["closed"],
        },
      ],
      Sat: [
        {
          tradingHours: designer.hours["Sat"][0]["tradingHours"],
          closed: designer.hours["Sat"][0]["closed"],
        },
      ],
      Sun: [
        {
          tradingHours: designer.hours["Sun"][0]["tradingHours"],
          closed: designer.hours["Sun"][0]["closed"],
        },
      ],
    },
  };

  const onFinishWorksForm = () => {
    const promises = [];
    fileList.forEach((file) => {
      if (file["originFileObj"] !== undefined) {
        const uploadTask = firebaseOrigin
          .storage()
          .ref()
          .child(`images/${designer.uid}/${file.name}`)
          .put(file.originFileObj);
        promises.push(uploadTask);
        uploadTask.on(
          firebaseOrigin.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (snapshot.state === firebaseOrigin.storage.TaskState.RUNNING) {
              console.log(`Progress: ${progress}%`);
            }
          },
          (error) => console.log(error),
          async () => {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            photoURLs.push({
              uid: file.uid,
              name: file.name,
              status: "done",
              url: downloadURL,
            });
            if (photoURLs.length === promises.length) {
              updateFireStorage();
            }
          }
        );
      } else {
        // console.log("pass");
      }
    });
    // if (fileList.length === designer?.works.length) {
    // TODO: bug - upload executes twice in certain cases
    updateFireStorage();
    // }
    Promise.all(promises)
      .then(function () {
        console.log("complete");
      })
      .catch((err) => console.log(err.code));
  };

  const updateFireStorage = () => {
    console.log("update");
    const updatedList = fileList.filter(
      (work) => work["originFileObj"] === undefined
    );
    const newWorks = [...updatedList, ...photoURLs];
    firebaseStore
      .collection("users")
      .doc(designer.uid)
      .update({ works: newWorks })
      .then(function () {
        return message.success({
          content: "Saved",
          duration: "2",
          className: "onFinishMessage",
        });
      });
    // updateRedux(newWorks); // TODO: Kangmin, please re-enable
  };

  const onFinish = async (values) => {
    // Update works image
    onFinishWorksForm();

    // Validate services
    for (const service in values.services) {
      // Firebase requires service category must not be empty
      if (!values.services[service]) {
        delete values.services[service];
      }
      // Firebase requires description to be not undefined
      else {
        for (const subService of values.services[service]) {
          if (!subService.description) {
            subService.description = "";
          }
        }
      }
    }
    // Update update everything else
    designer.services = values.services || {};
    designer.introduction = values.introduction || "";
    designer.hours = values.hours;
    designer.accountType = selectedDesignerType;

    // Update redux client
    dispatch(refresh(designer));
    // Update firebase
    await firebaseStore
      .collection("users")
      .doc(designer.uid)
      .update(designer)
      .then(function () {
        return message.success({
          content: "Saved",
          duration: "2",
          className: "onFinishMessage",
        });
      });
    goToMyProfile();
  };

  const goToMyProfile = () => {
    const route = `/designer_profile?uid=${designer.uid}`;
    history.push(route);
  };

  const editProfilePanels = [
    {
      header: "Contact information",
      content: <ClientProfileView client={designer} editMode={true} />,
    },
    {
      header: "Services",
      content: <ServiceNPriceForm designer={designer} createMode={createMode} />,
    },
    {
      header: "Hours",
      content: <HoursForm designer={designer} createMode={createMode} formInitialValues={formInitialValues} />,
    },
    {
      header: "Portfolio",
      content: <WorksForm designer={designer} createMode={createMode} fileList={fileList} setFileList={setFileList} photoURLs={photoURLs} onFinishWorksForm={onFinishWorksForm} />,
    },
    {
      header: "Self introduction",
      content: <SelfIntroForm designer={designer} createMode={createMode} />,
    },
  ];

  return (
    <>
      {createMode ? (
        <div className="editProfileModal">
          <Form name="becomeDesignerForm" initialValues={formInitialValues} onFinish={onFinish}>
            {editProfilePanels.slice(1).map((panel, index) => {
              return (
                <div key={`becomeDesignerForm${index}`}>
                  <div className="becomeDesignerFormDescription">{panel.header}</div>
                  {panel.content}
                </div>
              );
            })}
            <Form.Item>
              <Button className="blackBtn" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
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
                key={`editProfilePanel${index}`}
              >
                {panel.content}
              </Panel>
            );
          })}
        </Collapse>
      )}
    </>
  );
}
