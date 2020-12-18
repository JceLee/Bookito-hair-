import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { CloseOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import BlackBtn from "../../../commonComponents/BlackBtn";

export default function DeleteAppointmentModal(props) {
  const { deleteAppointmentModalState, displayDeleteAppointmentModal, appointmentID } = props;

  console.log(appointmentID);

  return (
    <Dialog
      className="deleteAppointmentModal"
      open={deleteAppointmentModalState}
      onClose={displayDeleteAppointmentModal}
    >
      <Row className="modalHeader">
        <Col span={8} className="headerTitleCol">
          Delete
        </Col>
        <Col span={16} className="headerDelseteCol">
          <CloseOutlined onClick={displayDeleteAppointmentModal} />
        </Col>
      </Row>
      <Row className="modalContent">Are you sure you want to delete?</Row>
      <Row className="modalFooter">
        <BlackBtn btnName="Delete" />
      </Row>
    </Dialog>
  );
}
