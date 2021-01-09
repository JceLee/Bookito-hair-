import React from "react";
import { Collapse, Button } from "antd";
import ClientProfileView from "../../../view/clientProfileView/ClientProfileView";
import ServiceNPriceForm from "./designerEditProfile/ServiceNPriceForm";
import HoursForm from "./designerEditProfile/HoursForm";
import WorksForm from "./designerEditProfile/WorksForm";
import SelfIntroForm from "./designerEditProfile/SelfIntroForm";

const { Panel } = Collapse;

export default function DesignerProfileCreateEdit(props) {
  const { designer } = props;

  const editProfilePanels = [
    {
      header: "Address & Phone",
      content: <ClientProfileView client={designer} editMode={true} />,
    },
    {
      header: "Service & Price",
      content: <ServiceNPriceForm designer={designer} />,
    },
    {
      header: "Hours",
      content: <HoursForm designer={designer} />,
    },
    {
      header: "Works",
      content: <WorksForm designer={designer} />,
    },
    {
      header: "Self-introduction",
      content: <SelfIntroForm designer={designer} />,
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
    </>
  );
}
