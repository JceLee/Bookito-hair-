import React from 'react';
import { Row, Col } from 'antd';
import EditCalendar from './EditCalendar';
import Times from './Times';
// import '../../../assets/scss/View/DesignerScheduleView/DesignerScheduleView.scss';

export default function StepOne() {
  return (
    <>
      <p id='designerName'>Designer: Jane Smith</p>
      <Row>
        <Col span={13}>
          <EditCalendar />
        </Col>
        <Col span={11}>
          <p>Please select time</p>
          <Times />
        </Col>
      </Row>
    </>
  );
}
