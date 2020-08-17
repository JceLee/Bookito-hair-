// import React, { useState } from 'react';
// import { Checkbox, TimePicker, Form } from 'antd';

// import moment from 'moment';

// const { RangePicker } = TimePicker;
// const hoursFormat = 'HH:mm';
// const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
// const hoursLayout = {
//   labelCol: { span: 3 },
//   wrapperCol: { span: 24 },
// };

// const HoursForm = () => {
//   const [DayChecked, setDayChecked] = useState({
//     Mon: false,
//     Tue: false,
//     Wed: false,
//     Thurs: false,
//     Fri: false,
//     Sat: false,
//     Sun: false,
//   });

//   const onChange = (e) => {
//     const { name, checked } = e.target;
//     setDayChecked((prevValue) => ({
//       ...prevValue,
//       [name]: checked,
//     }));
//   };

//   return (
//     <div className='editHours'>
//       <h3>Hours</h3>
//       {days.map((day, index) => {
//         return (
//           <div key={index}>
//             <Form.Item
//               {...hoursLayout}
//               label={day}
//               colon={false}
//               rules={[
//                 {
//                   required: true,
//                 },
//               ]}
//             >
//               <RangePicker
//                 defaultValue={moment('00:00', hoursFormat)}
//                 format={hoursFormat}
//                 disabled={DayChecked[day]}
//               />
//               <Checkbox
//                 className='hoursCheckbox'
//                 checked={DayChecked[day]}
//                 name={day}
//                 onChange={onChange}
//               >
//                 'Closed'
//               </Checkbox>
//             </Form.Item>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default HoursForm;

import React, { useState } from 'react';
import { Checkbox, TimePicker, Form } from 'antd';
import TimeRangeSlider from 'react-time-range-slider';
import InputRange from 'react-input-range';

const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const hoursLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 24 },
};

const HoursForm = () => {
  // const [Value, setValue] = useState({
  //   Mon: { start: '08:00', end: '23:00' },
  //   Tue: { start: '08:00', end: '23:00' },
  //   Wed: { start: '08:00', end: '23:00' },
  //   Thurs: { start: '08:00', end: '23:00' },
  //   Fri: { start: '08:00', end: '23:00' },
  //   Sat: { start: '08:00', end: '23:00' },
  //   Sun: { start: '08:00', end: '23:00' },
  // });

  const [Value, setValue] = useState({
    Mon: { min: 0, max: 1439 },
    Tue: { min: 0, max: 1439 },
    Wed: { min: 0, max: 1439 },
    Thurs: { min: 0, max: 1439 },
    Fri: { min: 0, max: 1439 },
    Sat: { min: 0, max: 1439 },
    Sun: { min: 0, max: 1439 },
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

  const onChange = (e) => {
    const { name, checked } = e.target;
    setDayChecked((prevValue) => ({
      ...prevValue,
      [name]: checked,
    }));
  };

  return (
    <div className='editHours'>
      <h3>Hours</h3>
      {days.map((day, index) => {
        let tmp = { [day]: Value[day] };
        console.log(tmp);
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
              <InputRange
                ariaControls={day}
                formatLabel={(value) => `${value}!!`}
                maxValue={1439}
                minValue={0}
                step={30}
                value={tmp[day]}
                disabled={DayChecked[day]}
                onChange={(tmp) => {
                  return setValue({
                    ...tmp,
                    [tmp]: tmp[day],
                  });
                }}
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
