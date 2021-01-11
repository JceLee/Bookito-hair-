import React, {useRef} from "react";
import Dialog from "@material-ui/core/Dialog";
import { CloseOutlined } from "@ant-design/icons";
import {Row, Col, notification} from "antd";
import BlackBtn from "../../../commonComponents/BlackBtn";
import {firebaseStore} from "../../../../config/fbConfig";

export default function DeleteAppointmentModal(props) {
  const { deleteAppointmentModalState, displayDeleteAppointmentModal, appointmentID } = props;

  const changeState = () => {
    firebaseStore
      .collection("appointments")
      .doc(appointmentID)
      .update({
        state: "DeletedByDesigner",
      })
      .then(function () {
        displayDeleteAppointmentModal();
        return notification.success({
          className: "notificationSaved",
          style: { top: "550px" },
          message: "Saved",
          duration: "2",
        });
      });}

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
        <BlackBtn btnName="Delete" onClick={changeState}/>
      </Row>
    </Dialog>
  );
}
