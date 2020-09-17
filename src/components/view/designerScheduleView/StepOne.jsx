import React from "react";
import { Row, Col, Radio } from "antd";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss";

export default function StepOne(props) {
  const {
    timeSelection,
    displayedDay,
    handleDay,
    radioChange,
    bookingTime,
  } = props;

  const renderCalendar = () => (
    <div className="editDesignerCalendar">
      <DayPicker format={'MM/dd/yyyy'} selectedDays={displayedDay} onDayClick={handleDay} />
    </div>
  );

  const renderTime = () => (
    <div className="timeButtons">
      <Radio.Group>
        {timeSelection.map((hour, index) => {
          const { time, value, disabled } = hour;
          return (
            <Radio.Button
              key={index}
              className="hourRadioBtn"
              value={time}
              disabled={disabled}
              checked={bookingTime === value}
              onChange={radioChange}
            >
              {time}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </div>
  );

  return (
    <div className="stepOne">
      <p id="title1">Date and Time</p>
      <Row>
        <Col span={13}>{renderCalendar()}</Col>
        <p id="selectTime">Please select time</p>
        <Col span={11}>{renderTime()}</Col>
      </Row>
    </div>
  );
}
