import React, { useState } from 'react';
import { Radio } from 'antd';
import '../../../assets/scss/View/DesignerScheduleView/DesignerScheduleView.scss';

export default function Times() {
  //   const radioStyle = {
  //     // display: 'block',
  //     'margin-top': '20px',
  //     'margin-right': '30px',
  //     'border-radius': '10px',
  //   };

  return (
    <div className='timeButtons'>
      <Radio.Group defaultValue='time1' scroll={{ y: 10 }}>
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
      </Radio.Group>
    </div>
  );
}
