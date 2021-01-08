import React from "react";
import { Collapse } from "antd";
import ClientProfileView from "../../../view/clientProfileView/ClientProfileView";
import ServiceNPriceForm from "./designerEditProfile/ServiceNPriceForm";
import HoursForm from "./designerEditProfile/HoursForm";
import WorksForm from "./designerEditProfile/WorksForm";
import SelfIntroForm from "./designerEditProfile/SelfIntroForm";

const defaultStartTime = 16; // 08:00
const defaultEndTime = 42; // 21:00
const defaultTradingHours = [defaultStartTime, defaultEndTime];
const { Panel } = Collapse;

export default function DesignerProfileCreateEdit() {

  const editProfilePanels = [
    {
      header: "Service & Price",
      content: <ServiceNPriceForm />,
    },
    {
      header: "Hours",
      content: <HoursForm defaultTradingHours={defaultTradingHours} />,
    },
    {
      header: "Address & Phone",
      content: <ClientProfileView editMode={true} />,
    },
    {
      header: "Works",
      content: <WorksForm />,
    },
    {
      header: "Self-introduction",
      content: <SelfIntroForm />,
    },
  ];

  return (
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
  );
}
