import React, { useState } from 'react';
// import { Radio, TimePicker } from 'antd';
import DatePicker from 'react-datepicker';
import '../../../assets/scss/View/DesignerScheduleView/DesignerScheduleView.scss';

export default function Times() {
  // const [time, setTime] = useState('00:00am');
  // const [showTime, setShowTime] = useState(true);
  const [startTime, setStartTime] = useState(new Date());

  return (
    <div className='timeButtons'>
      <p>Choose Time</p>
      <DatePicker
        selected={startTime}
        onChange={(time) => setStartTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption='Time'
        dateFormat='h:mm aa'
      />
      {/* <span>{time}</span>
      {!showTime && <button onClick={() => setShowTime(true)}>Edit</button>}
      <br />
      {showTime && (
        <TimeKeeper
          time={time}
          onChange={(newTime) => setTime(newTime.formatted12)}
          coarseMinutes={5}
          forceCoarseMinutes
          switchToMinuteOnHourSelect
          onDoneClick={() => setShowTime(false)}
        />
      )} */}

      {/* <Radio.Group defaultValue='time1'>
        <Radio.Button
          value='time1'
          className='time1'
          style={{ borderRadius: 10, marginRight: 30, marginBottom: 20 }}
        >
          09:00
        </Radio.Button>
        <Radio.Button
          value='time2'
          style={{ borderRadius: 10, marginRight: 30 }}
        >
          09:30
        </Radio.Button>
        <Radio.Button
          value='time3'
          style={{ borderRadius: 10, marginRight: 30 }}
        >
          10:00
        </Radio.Button>
        <Radio.Button
          value='time4'
          style={{ borderRadius: 10, marginRight: 30, marginBottom: 20 }}
        >
          10:30
        </Radio.Button>

        <Radio.Button
          value='time5'
          style={{ borderRadius: 10, marginRight: 30 }}
        >
          11:00
        </Radio.Button>

        <Radio.Button
          value='time6'
          style={{ borderRadius: 10, marginRight: 30 }}
        >
          11:30
        </Radio.Button>

        <Radio.Button
          value='time7'
          style={{ borderRadius: 10, marginRight: 30 }}
        >
          12:00
        </Radio.Button>

        <Radio.Button
          value='time8'
          style={{ borderRadius: 10, marginRight: 30 }}
        >
          12:30
        </Radio.Button>

        <Radio.Button
          value='time9'
          style={{ borderRadius: 10, marginRight: 30 }}
        >
          13:00
        </Radio.Button>
      </Radio.Group> */}
    </div>
  );
}
