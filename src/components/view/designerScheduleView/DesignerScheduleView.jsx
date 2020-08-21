import React, { useState } from 'react';
import 'react-day-picker/lib/style.css';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';
import { Steps, message, Modal, Button } from 'antd';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const timeSelect = [
  { time: '09:00', value: '09:00', disabled: false },
  { time: '09:30', value: '09:30', disabled: false },
  { time: '10:00', value: '10:00', disabled: false },
  { time: '10:30', value: '10:30', disabled: true },
  { time: '11:00', value: '11:00', disabled: false },
  { time: '11:30', value: '11:30', disabled: false },
  { time: '12:00', value: '12:00', disabled: false },
  { time: '12:30', value: '12:30', disabled: false },
  { time: '13:00', value: '13:00', disabled: true },
  { time: '13:30', value: '13:30', disabled: false },
  { time: '14:00', value: '14:00', disabled: false },
  { time: '14:30', value: '14:30', disabled: false },
  { time: '15:00', value: '15:00', disabled: true },
  { time: '15:30', value: '15:30', disabled: false },
  { time: '16:00', value: '16:00', disabled: false },
  { time: '16:30', value: '16:30', disabled: false },
  { time: '17:00', value: '17:00', disabled: false },
  { time: '17:30', value: '17:30', disabled: false },
];

const services = [
  { key: 'Cuts', tab: 'Cuts' },
  { key: 'Style', tab: 'Style' },
  { key: 'Perms', tab: 'Perms' },
  { key: 'Colors', tab: 'Colors' },
];

const servicesContent = {
  Cuts: [
    {
      id: 1,
      //gender?
      service: 'Men Cut',
      price: 35,
      description: 'The price may differ',
    },
    {
      id: 2,
      service: 'Women Cut',
      price: 40,
      description: 'The price may differ',
    },
    {
      id: 3,
      service: 'Kids Cut',
      price: 15,
      description: 'The price may differ',
    },
  ],
  Style: [
    {
      id: 4,
      service: 'Men Style',
      price: 35,
      description: 'The price may differ',
    },
    {
      id: 5,
      service: 'Women Style',
      price: 40,
      description: 'The price may differ',
    },
    {
      id: 6,
      service: 'Kids Style',
      price: 15,
      description: 'The price may differ',
    },
  ],
  Perms: [
    {
      id: 7,
      service: 'Men Perms',
      price: 35,
      description: 'The price may differ',
    },
    {
      id: 8,
      service: 'Women Perms',
      price: 40,
      description: 'The price may differ',
    },
    {
      id: 9,
      service: 'Kids Perms',
      price: 15,
      description: 'The price may differ',
    },
  ],
  Colors: [
    {
      id: 10,
      service: 'Men Colors',
      price: 35,
      description: 'The price may differ',
    },
    {
      id: 11,
      service: 'Women Colors',
      price: 40,
      description: 'The price may differ',
    },
    {
      id: 12,
      service: 'Kids Colors',
      price: 15,
      description: 'The price may differ',
    },
  ],
};

export default function DesignerSchedule() {
  const { Step } = Steps;
  const [displayedDay, setDisplayedDay] = useState(null);
  const [key, setKey] = useState('Cuts');
  const [calculationBox, setCalculationBox] = useState([]);
  const [page, setPage] = useState('Estimated Price');
  const [current, setCurrent] = useState(0);
  const [bookingTime, setBookingTime] = useState('');

  const onChange = (current) => {
    setCurrent(current);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const navigateTo = (rightPage) => {
    setPage(rightPage);
  };

  const handleDayClick = (day, { selected }) => {
    setDisplayedDay(selected ? undefined : day);
  };

  const onRadioChange = (hour) => {
    console.log(hour.target.value);
    setBookingTime(hour.target.value);
  };

  const onTabChange = (key) => {
    setKey(key);
  };

  const removeFromBox = (serviceToRemove) => {
    setCalculationBox(
      Object.values(calculationBox).filter(
        (service) => service !== serviceToRemove
      )
    );
  };

  const totalSum = () => {
    return Object.values(calculationBox).reduce(
      (sum, { price }) => sum + price,
      0
    );
  };

  const steps = [
    {
      title: 'Date and time',
      content: (
        <StepOne
          timeSelection={timeSelect}
          displayedDay={displayedDay}
          handleDay={handleDayClick}
          radioChange={onRadioChange}
          bookingTime={bookingTime}
          setBookingTime={setBookingTime}
        />
      ),
    },
    {
      title: 'Service and estimated price',
      content: (
        <StepTwo
          services={services}
          servicesContent={servicesContent}
          serviceKey={key}
          calculationBox={calculationBox}
          setCalculationBox={setCalculationBox}
          page={page}
          navigateTo={navigateTo}
          onTabChange={onTabChange}
          removeFromBox={removeFromBox}
          totalSum={totalSum}
        />
      ),
    },
    {
      title: 'Final check',
      content: (
        <StepThree
          current={current}
          setCurrent={setCurrent}
          displayedDay={displayedDay}
          bookingTime={bookingTime}
        />
      ),
    },
  ];

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
        Book Now
      </Button>

      <Modal
        title='Book Now'
        width={900}
        visible={visible}
        onOk={handleOk}
        okText='Save Schedule'
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <Steps current={current} onChange={onChange}>
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
