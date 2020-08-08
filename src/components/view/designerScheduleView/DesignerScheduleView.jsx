import React, { useState } from 'react';
import { Steps, message, Row, Col, Modal, Button } from 'antd';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
// import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

export default function DesignerSchedule(props) {
  const { Step } = Steps;

  const steps = [
    {
      title: 'Date and time',
      content: <StepOne />,
    },
    {
      title: 'Service and estimated price',
      content: <StepTwo />,
    },
    {
      title: 'Final check',
      content: <StepThree />,
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
        width={900}
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
        <div className='stepsContent'>{steps[current].content}</div>
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
      </Modal>
    </div>
  );
}
