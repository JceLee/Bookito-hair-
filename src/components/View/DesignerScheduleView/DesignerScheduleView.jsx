import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'antd';
import EditCalendar from './EditCalendar';
import Services from './Services';
import Times from './Times';
// import '../../../assets/scss/View/DesignerScheduleView/DesignerScheduleView.scss';

export default function DesignerSchedule() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <p>Designer Schedule View</p>
      <br />
      <Button type='primary' onClick={showModal}>
        Edit Schedule
      </Button>
      <Modal
        title='Edit Schedule'
        width={820}
        visible={visible}
        onOk={handleOk}
        okText='Save Schedule'
        onCancel={handleCancel}
        // okButtonProps={{ disabled: true }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <p id='designerName'>Designer: Jane Smith</p>
        <Row>
          <Col span={13}>
            <EditCalendar />
          </Col>
          <Col span={11}>
            <p>Choose Service</p>
            <div className='ChooseServices'>
              <Services />
              <Times />
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}
