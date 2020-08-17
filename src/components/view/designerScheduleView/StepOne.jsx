import React from 'react';
import { Row, Col } from 'antd';
import EditCalendar from './EditCalendar';
import Times from './Times';
// import '../../../assets/scss/View/DesignerScheduleView/DesignerScheduleView.scss';

export default function StepOne(props) {
  const {
    timeSelection,
    chosenTime,
    displayedDay,
    handleDay,
    handleTime,
  } = props;
  return (
    <>
      <p id='designerName'>Designer: Jane Smith</p>
      <Row>
        <Col span={13}>
          <EditCalendar dayValue={displayedDay} calendarHandleDay={handleDay} />
        </Col>
        <Col span={11}>
          <p>Please select time</p>
          <Times
            timesSelect={timeSelection}
            chosenTime={chosenTime}
            // handleTime={handleTime}
          />
        </Col>
      </Row>
    </>
  );
}
