import React, { useState } from 'react';
import { Row, Col, Radio } from 'antd';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

export default function StepOne(props) {
  const {
    timeSelection,
    displayedDay,
    handleDay,
    radioChange,
    bookingTime,
  } = props;

  const renderCalendar = () => (
    <div className='editDesignerCalendar'>
      <p id='selectDay'>
        {displayedDay
          ? displayedDay.toLocaleDateString()
          : 'Please select a day'}
      </p>
      <DayPicker selectedDays={displayedDay} onDayClick={handleDay} />
    </div>
  );

  const renderTime = () => (
    <div className='timeButtons'>
      <Radio.Group>
        {timeSelection.map((hour, index) => {
          const { time, value, disabled } = hour;
          // console.log('babo1 : ' + bookingTime);
          if (time == bookingTime) {
            return (
              <Radio.Button
                key={index}
                value={value}
                disabled={disabled}
                checked={true}
                style={{ marginRight: 50, marginBottom: 20 }}
                onChange={radioChange}
              >
                {time}
              </Radio.Button>
            );
          } else {
            return (
              <Radio.Button
                key={index}
                value={value}
                disabled={disabled}
                checked={false}
                style={{ marginRight: 50, marginBottom: 20 }}
                onChange={radioChange}
              >
                {time}
              </Radio.Button>
            );
          }
        })}
      </Radio.Group>
    </div>
  );

  return (
    <>
      <p id='designerName'>Designer: Jane Smith</p>
      <Row>
        <Col span={13}>{renderCalendar()}</Col>
        <Col span={11}>
          <p>Please select time</p>
          {renderTime()}
        </Col>
      </Row>
    </>
  );
}
