import React from "react";
import { Row, Col, Radio } from "antd";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

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
      <DayPicker selectedDays={displayedDay} onDayClick={handleDay} />
    </div>
  );

  const renderTime = () => (
    <div className="timeButtons" id="selectTimePosition">
      <p id="selectTimePtag">Please select time</p>
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
      {renderCalendar()}
      {renderTime()}

      {/* <Row>
        <Col span={13}>{renderCalendar()}</Col>
        <p id="selectTime">Please select time</p>
        <Col span={11}>{renderTime()}</Col>
      </Row> */}
    </div>
  );
}
