import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { CloseOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import BlackBtn from "../../../commonComponents/BlackBtn";

export default function AddAppointmentModal(props) {
  const { addAppointmentModalState, displayAddAppointmentModal } = props;

  return (
    <Dialog
      className="addAppointmentModal"
      open={addAppointmentModalState}
      onClose={displayAddAppointmentModal}
    >
      <Row className="modalHeader">
        <Col span={8} className="headerTitleCol">
          Add
        </Col>
        <Col span={16} className="headerDeleteCol">
          <CloseOutlined onClick={displayAddAppointmentModal} />
        </Col>
      </Row>
      <Row className="modalContent"></Row>
      <Row className="modalFooter">
        <BlackBtn btnName="Add" />
      </Row>
    </Dialog>
  );
}
