// import React, { useState } from 'react';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

// export default function EditCalendar() {
//   const [selectedDay, setSelectedDay] = useState(null);

//   const handleDayClick = (day, { selected }) => {
//     setSelectedDay(selected ? undefined : day);
//   };

//   return (
//     <div className='editDesignerCalendar'>
//       <p id='selectDay'>
//         {selectedDay ? selectedDay.toLocaleDateString() : 'Please select a day'}
//       </p>
//       <DayPicker selectedDays={selectedDay} onDayClick={handleDayClick} />
//       {/* <Calendar fullscreen={false} onPanelChange={EditCalendar} /> */}
//     </div>
//   );
// }

import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

export default function EditCalendar(props) {
  const { dayValue, calendarHandleDay } = props;
  return (
    <div className='editDesignerCalendar'>
      <p id='selectDay'>
        {dayValue ? dayValue.toLocaleDateString() : 'Please select a day'}
      </p>
      <DayPicker selectedDays={dayValue} onDayClick={calendarHandleDay} />
    </div>
  );
}
