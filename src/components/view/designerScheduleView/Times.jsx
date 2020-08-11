import React from 'react';
import { Radio } from 'antd';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

export default function Times() {
  const timeSelect = [
    { time: '09:00', value: 'time1', disabled: false },
    { time: '09:30', value: 'time2', disabled: false },
    { time: '10:00', value: 'time3', disabled: false },
    { time: '10:30', value: 'time4', disabled: true },
    { time: '11:00', value: 'time5', disabled: false },
    { time: '11:30', value: 'time6', disabled: false },
    { time: '12:00', value: 'time7', disabled: false },
    { time: '12:30', value: 'time8', disabled: false },
    { time: '13:00', value: 'time9', disabled: true },
    { time: '13:30', value: 'time10', disabled: false },
    { time: '14:00', value: 'time11', disabled: false },
    { time: '14:30', value: 'time12', disabled: false },
    { time: '15:00', value: 'time13', disabled: true },
    { time: '15:30', value: 'time14', disabled: false },
    { time: '16:00', value: 'time15', disabled: false },
    { time: '16:30', value: 'time16', disabled: false },
    { time: '17:00', value: 'time17', disabled: false },
    { time: '17:30', value: 'time18', disabled: false },
  ];

  return (
    <div className='timeButtons'>
      <Radio.Group>
        {timeSelect.map((hour) => (
          <Radio.Button
            value={hour.value}
            disabled={hour.disabled}
            style={{ marginRight: 50, marginBottom: 20 }}
          >
            {hour.time}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
}
