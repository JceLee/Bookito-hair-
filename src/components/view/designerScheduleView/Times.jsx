import React from 'react';
import { Radio } from 'antd';
import '../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss';

export default function Times(props) {
  return (
    <div className='timeButtons'>
      <Radio.Group defaultValue='nine'>
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
