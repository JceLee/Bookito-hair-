import React from "react";
import { Row, Col, Radio } from "antd";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

export default function StepOne(props) {
  const { timeSelection, displayedDay, handleDay, radioChange, bookingTime } = props;

  const renderCalendar = () => (
    <DayPicker format={"MM/dd/yyyy"} selectedDays={displayedDay} onDayClick={handleDay} />
  );

  const renderTime = () => (
    <div id="selectTimePosition">
      <Radio.Group>
        {timeSelection.map((hour, index) => {
          const { time, value, disabled } = hour;
          return (
            <Radio.Button
              key={index}
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
    <div>
      {renderCalendar()}
      <p id="selectTime">Please select time</p>
      {renderTime()}
    </div>
  );
}
