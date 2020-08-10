import React from 'react';
import { Row, Col } from 'antd';
import Services from './Services';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

export default function StepTwo() {
  return (
    <>
      <Row>
        <Col span={13}>
          <div className='genderService'>
            <p id='title1'>Please select Service</p>
            <Services />
          </div>
        </Col>
        <Col span={11}>
          <p id='title2'>Estimated Price</p>
        </Col>
      </Row>
    </>
  );
}
