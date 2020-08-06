import React, { useState } from 'react';
import { Steps, message, Row, Col, Modal, Button } from 'antd';
import EditCalendar from './EditCalendar';
import Services from './Services';
import Times from './Times';
// import '../../../assets/scss/View/DesignerScheduleView/DesignerScheduleView.scss';

export default function DesignerSchedule(props) {
  const { Step } = Steps;

  const steps = [
    {
      title: 'Choose date and time',
    },
    {
      title: 'Choose service',
    },
    {
      title: 'Confirmation',
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        {/* <div className='stepsContent'>{steps[current].content}</div> */}
        <div className='stepAction'>
          {current < steps.length - 1 && (
            <Button type='primary' onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type='primary'
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
        <p id='designerName'>Designer: Jane Smith</p>
        <Row>
          <Col span={13}>
            <EditCalendar />
          </Col>
          <Col span={11}>
            {/* <p>Choose Service</p>
            <div className='ChooseServices'>
              <Services /> */}
            <Times />
            {/* </div> */}
          </Col>
        </Row>
      </Modal>
    </div>
  );
}
