import React, { useState } from 'react';
import { Checkbox, TimePicker, Form } from 'antd';
import moment from 'moment';

const { RangePicker } = TimePicker;
const hoursFormat = 'HH:mm';
const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const hoursLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 24 },
};

const HoursForm = () => {
  const [DayChecked, setDayChecked] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thurs: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const onChange = (e) => {
    const { name, checked } = e.target;
    setDayChecked((prevValue) => ({
      ...prevValue,
      [name]: checked,
    }));
  };

  return (
    <div className='editHours'>
      <h3>Hours [NOT YET]</h3>
      {days.map((day, index) => {
        return (
          <div key={index}>
            <Form.Item
              {...hoursLayout}
              label={day}
              colon={false}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <RangePicker
                defaultValue={moment('00:00', hoursFormat)}
                format={hoursFormat}
                disabled={DayChecked[day]}
              />
              <Checkbox
                className='hoursCheckbox'
                checked={DayChecked[day]}
                name={day}
                onChange={onChange}
              >
                'Closed'
              </Checkbox>
            </Form.Item>
          </div>
        );
      })}
    </div>
  );
};

export default HoursForm;
