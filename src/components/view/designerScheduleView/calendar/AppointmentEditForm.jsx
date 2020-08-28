import React from "react";
import { Card, Row, Col, Button, Divider, Form } from "antd";
import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";

export default function AppointmentEditForm(props) {
  const { appointmentData } = props;
  return (
    <>
      {/* <AppointmentForm.BasicLayout
        appointmentData={appointmentData}
        onFieldChange={onFieldChange}
        {...restProps}
      >
        {" "}
        <AppointmentForm.Label text="Custom Field" type="title" />
        <AppointmentForm.TextEditor
          text="Type"
          type="title"
          value={appointmentData.customField}
          onValueChange={onCustomFieldChange}
        />
      </AppointmentForm.BasicLayout> */}
      {/* <AppointmentForm.Layout appointmentdata={appointmentData} {...restProps}>
        Hi
      </AppointmentForm.Layout> */}
      <div>{appointmentData.title}</div>
      <div>{appointmentData.startDate}</div>
      <div>{appointmentData.endDate}</div>
      <div>{appointmentData.style}</div>
      <div>{appointmentData.phoneNumber}</div>
    </>
  );
}
