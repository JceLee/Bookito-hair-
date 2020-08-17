import React from 'react';
import { Radio } from 'antd';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

export default function Times(props) {
  const { timesSelect, handleTime, chosenTime } = props;

  const onRadioChange = (hour) => {
    console.log(hour.target.value);
  };

  return (
    <div className='timeButtons'>
      <Radio.Group>
        {timesSelect.map((hour, index) => {
          const { time, value, disabled } = hour;
          return (
            <Radio.Button
              key={index}
              value={value}
              disabled={disabled}
              style={{ marginRight: 50, marginBottom: 20 }}
              onChange={onRadioChange}
            >
              {time}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </div>
  );
}
