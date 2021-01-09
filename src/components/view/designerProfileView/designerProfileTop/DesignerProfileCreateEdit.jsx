import React from "react";
import { Collapse, Button } from "antd";
import ClientProfileView from "../../../view/clientProfileView/ClientProfileView";
import ServiceNPriceForm from "./designerEditProfile/ServiceNPriceForm";
import HoursForm from "./designerEditProfile/HoursForm";
import WorksForm from "./designerEditProfile/WorksForm";
import SelfIntroForm from "./designerEditProfile/SelfIntroForm";

const defaultStartTime = 16; // 08:00
const defaultEndTime = 42; // 21:00
const defaultTradingHours = [defaultStartTime, defaultEndTime];
const { Panel } = Collapse;

export default function DesignerProfileCreateEdit(props) {
  const { designer, createMode } = props;

  const editProfilePanels = [
    {
      header: "Address & Phone",
      content: <ClientProfileView client={designer} createMode={createMode} editMode={true} />,
    },
    {
      header: "Service & Price",
      content: <ServiceNPriceForm designer={designer} createMode={createMode} />,
    },
    {
      header: "Hours",
      content: <HoursForm designer={designer} createMode={createMode} defaultTradingHours={defaultTradingHours} />,
    },
    {
      header: "Works",
      content: <WorksForm designer={designer} createMode={createMode} />,
    },
    {
      header: "Self-introduction",
      content: <SelfIntroForm designer={designer} createMode={createMode} />,
    },
  ];

  return (
    <>
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
      {createMode && (
        <Button
          className="blackBtn"
          onClick={() => {}}
        >
          Submit
        </Button>
      )}
    </>
  );
}
