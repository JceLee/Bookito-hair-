import React from 'react';
import { Calendar } from 'antd';
import '../../../assets/scss/View/DesignerScheduleView/DesignerScheduleView.scss';

export default function EditCalendar(value, mode) {
  console.log(value, mode);

  return (
    <div className='editDesignerCalendar'>
      <Calendar fullscreen={false} onPanelChange={EditCalendar} />
    </div>
  );
}
