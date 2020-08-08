import React, { useState } from 'react';
import { Radio, TimePicker } from 'antd';
// import DatePicker from 'react-datepicker';
import '../../../assets/scss/View/DesignerScheduleView/DesignerScheduleView.scss';

export default function Times(time, timeString) {
  console.log(time, timeString);
  // const [time, setTime] = useState('00:00am');
  // const [showTime, setShowTime] = useState(true);
  // const [startTime, setStartTime] = useState(new Date());

  // const range = (start, end) => {
  //   const result = [];
  //   for (let i = start; i < end; i++) {
  //     result.push(i);
  //   }
  //   return result;
  // };

  // const disabledHours = () => {
  //   const hours = range(0, 11);
  //   hours.splice(20, 4);
  //   return hours;
  // };

  return (
    <div className='timeButtons'>
      {/* <TimePicker
        use12Hours
        format='h:mm a'
        minuteStep={15}
        onChange={Times}
        // disabledHours={disabledHours}
        style={{ width: 200, marginLeft: 32 }}
      /> */}
      {/* <DatePicker
        selected={startTime}
        onChange={(time) => setStartTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption='Time'
        dateFormat='h:mm aa'
      /> */}
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

      <Radio.Group defaultValue='time1'>
        <Radio.Button
          value='time1'
          className='time1'
          style={{ marginRight: 30, marginBottom: 20 }}
        >
          09:00
        </Radio.Button>
        <Radio.Button value='time2' disabled style={{ marginRight: 30 }}>
          09:30
        </Radio.Button>
        <Radio.Button value='time3' style={{ marginRight: 30 }}>
          10:00
        </Radio.Button>
        <Radio.Button
          value='time4'
          style={{ marginRight: 30, marginBottom: 20 }}
        >
          10:30
        </Radio.Button>

        <Radio.Button value='time5' style={{ marginRight: 30 }}>
          11:00
        </Radio.Button>

        <Radio.Button value='time6' style={{ marginRight: 30 }}>
          11:30
        </Radio.Button>

        <Radio.Button
          value='time7'
          style={{ marginRight: 30, marginBottom: 20 }}
        >
          12:00
        </Radio.Button>

        <Radio.Button value='time8' style={{ marginRight: 30 }}>
          12:30
        </Radio.Button>

        <Radio.Button value='time9' style={{ marginRight: 30 }}>
          13:00
        </Radio.Button>

        <Radio.Button
          value='time10'
          style={{ marginRight: 30, marginBottom: 20 }}
        >
          13:30
        </Radio.Button>

        <Radio.Button value='time11' style={{ marginRight: 30 }}>
          14:00
        </Radio.Button>

        <Radio.Button value='time12' disabled style={{ marginRight: 30 }}>
          14:30
        </Radio.Button>

        <Radio.Button
          value='time13'
          disabled
          style={{ marginRight: 30, marginBottom: 20 }}
        >
          15:00
        </Radio.Button>

        <Radio.Button value='time14' style={{ marginRight: 30 }}>
          15:30
        </Radio.Button>

        <Radio.Button value='time15' style={{ marginRight: 30 }}>
          16:00
        </Radio.Button>

        <Radio.Button
          value='time16'
          style={{ marginRight: 30, marginBottom: 20 }}
        >
          16:30
        </Radio.Button>

        <Radio.Button value='time17' style={{ marginRight: 30 }}>
          17:00
        </Radio.Button>

        <Radio.Button value='time18' style={{ marginRight: 30 }}>
          17:30
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
