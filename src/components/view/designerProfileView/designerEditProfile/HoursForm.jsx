import React, { useState } from 'react';
import { Alert, Checkbox, Form, Space } from 'antd';
import Slider from '@material-ui/core/Slider';

const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const hoursLayout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 24 },
};

const minuteToTime = (value) => {
  value = value > 1439 ? 1439 : value;
  let hours = Math.floor(value / 60);
  let minutes = value - hours * 60;
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (minutes == 0) minutes = '00';
  return `${hours}:${minutes}`;
};

const HoursForm = () => {
  const [IsValid, setIsValid] = useState({
    Mon: true,
    Tue: true,
    Wed: true,
    Thurs: true,
    Fri: true,
    Sat: true,
    Sun: true,
  });

  const [DayChecked, setDayChecked] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thurs: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const [TimeValue, setTimeValue] = useState({
    Mon: [480, 1320],
    Tue: [480, 1320],
    Wed: [480, 1320],
    Thurs: [480, 1320],
    Fri: [480, 1320],
    Sat: [480, 1320],
    Sun: [480, 1320],
  });

  const onClose = (e) => {
    console.log(e, 'Closed Alert');
  };

  const handleChange = (event, newValue) => {
    let [start, end] = newValue;
    let inputTagInfo = event.currentTarget.getElementsByTagName('input');
    let touchmoveInputTagInfo = event.path[1].getElementsByTagName('input');
    let selectedDay = Object.values(inputTagInfo)[0].name;
    let touchmoveSelectedDay = Object.values(touchmoveInputTagInfo)[0].name;

    if (event.type === 'touchmove') {
      selectedDay = touchmoveSelectedDay;
    }

    if (end - start < 60) {
      console.log(start, end);
      setIsValid((prevValue) => ({
        ...prevValue,
        [selectedDay]: false,
      }));
    } else {
      setIsValid((prevValue) => ({
        ...prevValue,
        [selectedDay]: true,
      }));
      setTimeValue((prevValue) => ({
        ...prevValue,
        [selectedDay]: newValue,
      }));
    }
  };

  const onChange = (e) => {
    const { name, checked } = e.target;
    setDayChecked((prevValue) => ({
      ...prevValue,
      [name]: checked,
    }));
  };

  return (
    <div className='editHours'>
      {days.map((day, index) => {
        return (
          <div key={index}>
            <Form.Item
              {...hoursLayout}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Space>
                <span className='dayInHoursForm'>{day}</span>
                {'Start: ' + minuteToTime(TimeValue[day][0]) + ' '}
                {'End: ' + minuteToTime(TimeValue[day][1])}
                <Checkbox
                  className='hoursCheckbox'
                  checked={DayChecked[day]}
                  name={day}
                  onChange={onChange}
                >
                  Closed
                </Checkbox>
              </Space>

              {IsValid[day] ? null : (
                <Alert
                  message='Invalid values.'
                  type='error'
                  closable
                  onClose={onClose}
                />
              )}
              <Slider
                name={day}
                disabled={DayChecked[day]}
                value={TimeValue[day]}
                onChange={handleChange}
                min={360}
                max={1439}
                step={30}
              />
            </Form.Item>
          </div>
        );
      })}
    </div>
  );
};

export default HoursForm;
