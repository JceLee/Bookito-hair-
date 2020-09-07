import React, { useState } from "react";
import { Checkbox, Form, Space, Slider } from "antd";
import formatTime from "../../../../../helpers/timeFunctions";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const minValueInSlider = 0; // "00:00"
const maxValueInSlider = 47; // "23:30"
const timeConvertingFactor = 30;
const dash = " - ";

let sliderDisplay;
let checkboxOffset;

const formatter = (minutes) => {
  const formattedValue = formatTime(minutes * timeConvertingFactor);
  return `${formattedValue}`;
};

const destructureTimeRange = (minutes) => {
  const [startTime, endTime] = minutes;
  const convertedStartTime = startTime * timeConvertingFactor;
  const convertedEndTime = endTime * timeConvertingFactor;
  const from = formatTime(convertedStartTime);
  const to = formatTime(convertedEndTime);
  return { from, dash, to };
};

export default function HoursForm(props) {
  const { defaultTradingHours } = props;
  const [defaultStartTime, defaultEndTime] = defaultTradingHours;
  const [DayChecked, setDayChecked] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const [FormattedTimes, setFormattedTimes] = useState({
    Mon: [formatter(defaultStartTime), dash, formatter(defaultEndTime)],
    Tue: [formatter(defaultStartTime), dash, formatter(defaultEndTime)],
    Wed: [formatter(defaultStartTime), dash, formatter(defaultEndTime)],
    Thu: [formatter(defaultStartTime), dash, formatter(defaultEndTime)],
    Fri: [formatter(defaultStartTime), dash, formatter(defaultEndTime)],
    Sat: [formatter(defaultStartTime), dash, formatter(defaultEndTime)],
    Sun: [formatter(defaultStartTime), dash, formatter(defaultEndTime)],
  });

  const onChangeSlider1 = (minutes) => {
    const { from, dash, to } = destructureTimeRange(minutes);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Mon: [from, dash, to],
    }));
  };

  const onChangeSlider2 = (minutes) => {
    const { from, dash, to } = destructureTimeRange(minutes);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Tue: [from, dash, to],
    }));
  };

  const onChangeSlider3 = (minutes) => {
    const { from, dash, to } = destructureTimeRange(minutes);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Wed: [from, dash, to],
    }));
  };

  const onChangeSlider4 = (minutes) => {
    const { from, dash, to } = destructureTimeRange(minutes);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Thu: [from, dash, to],
    }));
  };

  const onChangeSlider5 = (minutes) => {
    const { from, dash, to } = destructureTimeRange(minutes);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Fri: [from, dash, to],
    }));
  };

  const onChangeSlider6 = (minutes) => {
    const { from, dash, to } = destructureTimeRange(minutes);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Sat: [from, dash, to],
    }));
  };

  const onChangeSlider7 = (minutes) => {
    const { from, dash, to } = destructureTimeRange(minutes);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Sun: [from, dash, to],
    }));
  };

  const selectedDayHandler = (day, minutes) => {
    switch (day) {
      case "Mon":
        return onChangeSlider1(minutes);
      case "Tue":
        return onChangeSlider2(minutes);
      case "Wed":
        return onChangeSlider3(minutes);
      case "Thu":
        return onChangeSlider4(minutes);
      case "Fri":
        return onChangeSlider5(minutes);
      case "Sat":
        return onChangeSlider6(minutes);
      case "Sun":
        return onChangeSlider7(minutes);
      default:
        break;
    }
  };

  const onChange = (event) => {
    const { name, checked } = event.target;
    setDayChecked((prevValue) => ({
      ...prevValue,
      [name]: checked,
    }));
  };

  return (
    <div className="editHours">
      {days.map((day) => {
        return (
          <div key={day}>
            <Form.List name={["hours", `${day}`]}>
              {(fields) => {
                return (
                  <div>
                    {fields.map((field) => {
                      DayChecked[day]
                        ? (sliderDisplay = "none") && (checkboxOffset = "-29px")
                        : (sliderDisplay = "block") &&
                          (checkboxOffset = "-48px");
                      return (
                        <Space
                          key={field.key}
                          style={{
                            position: "relative",
                            display: "block",
                            alignItems: "center",
                            margin: "10px 2px",
                          }}
                          align="start"
                        >
                          <Form.Item
                            {...field}
                            name={[field.name, "tradingHours"]}
                            className="hoursFormItem"
                            fieldKey={[field.fieldKey, "tradingHours"]}
                            valuePropName="value"
                            label={day}
                          >
                            <Slider
                              allowCross={false}
                              range
                              min={minValueInSlider}
                              max={maxValueInSlider}
                              disabled={DayChecked[day]}
                              onChange={(value) =>
                                selectedDayHandler(day, value)
                              }
                              tooltipPlacement="bottom"
                              tipFormatter={formatter}
                              style={{ display: `${sliderDisplay}` }}
                            />
                          </Form.Item>
                          <span className="formattedTimesInSpan">
                            {DayChecked[day] ? "Holiday" : FormattedTimes[day]}
                          </span>
                          <Form.Item
                            {...field}
                            name={[field.name, "closed"]}
                            className="hoursFormItem"
                            fieldKey={[field.fieldKey, "closed"]}
                            valuePropName="checked"
                          >
                            <Checkbox
                              className="hoursCheckbox"
                              checked={DayChecked[day]}
                              name={day}
                              onChange={onChange}
                              style={{ top: `${checkboxOffset}` }}
                            >
                              Closed
                            </Checkbox>
                          </Form.Item>
                        </Space>
                      );
                    })}
                  </div>
                );
              }}
            </Form.List>
          </div>
        );
      })}
    </div>
  );
}
