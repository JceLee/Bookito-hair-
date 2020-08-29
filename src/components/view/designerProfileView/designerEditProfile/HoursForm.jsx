import React, { useState } from "react";
import { Checkbox, Form, Space, Slider } from "antd";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let sliderDisplay;
let checkboxOffset;

const formatTime = (value) => {
  value = value > 1439 ? 1439 : value;
  let hours = Math.floor(value / 60);
  let minutes = value - hours * 60;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (minutes === 0) minutes = "00";
  return `${hours}:${minutes}`;
};

const formatter = (value) => {
  const formattedValue = formatTime(value * 30);
  return `${formattedValue}`;
};

const destructureTimeRange = (value) => {
  const [startTime, endTime] = value;
  const convertedStartTime = startTime * 30;
  const convertedEndTime = endTime * 30;
  const from = formatTime(convertedStartTime);
  const to = formatTime(convertedEndTime);
  const whitespace = " - ";
  // const startLabel = "Start: ";
  // const endLabel = "End: ";
  return { from, whitespace, to };
};

const HoursForm = () => {
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
    Mon: [formatter(16), " - ", formatter(42)],
    Tue: [formatter(16), " - ", formatter(42)],
    Wed: [formatter(16), " - ", formatter(42)],
    Thu: [formatter(16), " - ", formatter(42)],
    Fri: [formatter(16), " - ", formatter(42)],
    Sat: [formatter(16), " - ", formatter(42)],
    Sun: [formatter(16), " - ", formatter(42)],
  });

  const onChangeSlider1 = (value) => {
    const { from, whitespace, to } = destructureTimeRange(value);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Mon: [from, whitespace, to],
    }));
  };

  const onChangeSlider2 = (value) => {
    const { from, whitespace, to } = destructureTimeRange(value);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Tue: [from, whitespace, to],
    }));
  };

  const onChangeSlider3 = (value) => {
    const { from, whitespace, to } = destructureTimeRange(value);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Wed: [from, whitespace, to],
    }));
  };

  const onChangeSlider4 = (value) => {
    const { from, whitespace, to } = destructureTimeRange(value);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Thu: [from, whitespace, to],
    }));
  };

  const onChangeSlider5 = (value) => {
    const { from, whitespace, to } = destructureTimeRange(value);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Fri: [from, whitespace, to],
    }));
  };

  const onChangeSlider6 = (value) => {
    const { from, whitespace, to } = destructureTimeRange(value);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Sat: [from, whitespace, to],
    }));
  };

  const onChangeSlider7 = (value) => {
    const { from, whitespace, to } = destructureTimeRange(value);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      Sun: [from, whitespace, to],
    }));
  };

  const selectedDayHandler = (day, value) => {
    switch (day) {
      case "Mon":
        return onChangeSlider1(value);
      case "Tue":
        return onChangeSlider2(value);
      case "Wed":
        return onChangeSlider3(value);
      case "Thu":
        return onChangeSlider4(value);
      case "Fri":
        return onChangeSlider5(value);
      case "Sat":
        return onChangeSlider6(value);
      case "Sun":
        return onChangeSlider7(value);
      default:
        break;
    }
  };

  const onChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
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
                      {
                        DayChecked[day]
                          ? (sliderDisplay = "none") &&
                            (checkboxOffset = "-29px")
                          : (sliderDisplay = "block") &&
                            (checkboxOffset = "-48px");
                      }
                      return (
                        <Space
                          key={field.key}
                          style={{
                            // backgroundColor: "rgb(159, 201, 238)",
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
                              min={0}
                              max={47}
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
};

export default HoursForm;
