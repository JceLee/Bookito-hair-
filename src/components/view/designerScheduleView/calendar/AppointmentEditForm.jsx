import React from "react";
import { Card, Row, Col, Button, Divider, Form } from "antd";
import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";

export default function AppointmentEditForm(props) {
  const { appointmentData } = props;
  return (
    <>
      <div>{appointmentData.title}</div>
      <div>{appointmentData.startDate}</div>
      <div>{appointmentData.endDate}</div>
      <div>{appointmentData.style}</div>
      <div>{appointmentData.phoneNumber}</div>
    </>
  );
}
