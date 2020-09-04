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
//       <h3>Hours [NOT YET]</h3>
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
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import moment from 'moment';

const { RangePicker } = TimePicker;
const hoursFormat = 'HH:mm';
const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const hoursLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 24 },
};

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

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

  const [TimeValue, setTimeValue] = useState({
    Mon: [20, 37],
    Tue: [20, 37],
    Wed: [20, 37],
    Thurs: [20, 37],
    Fri: [20, 37],
    Sat: [20, 37],
    Sun: [20, 37],
  });

  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    let currentEventTarget = event.currentTarget;
    let inputTagInfo = currentEventTarget.getElementsByTagName('input');
    console.log(inputTagInfo[days[0]].name);
    // console.log(day.Mon.name);
    // console.log(day.Tue.name);
    // console.log(day.Wed.name);
    // console.log(day.Thurs.name);
    // console.log(day.Fri.name);
    // console.log(day.Sat.name);
    // console.log(day.Sun.name);

    // setTimeValue({day[day].name: newValue});
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
              <Slider
                name={day}
                disabled={DayChecked[day]}
                value={value}
                onChange={handleChange}
                aria-labelledby={day}
                getAriaValueText={valuetext}
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
