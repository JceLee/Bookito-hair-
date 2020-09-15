import React, { useState } from "react";
import { Checkbox, Form, Space, Slider } from "antd";
import formatTime, {
  destructureTimeRange,
} from "../../../../../helpers/timeFunctions";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const minValueInSlider = 0; // "00:00"
const maxValueInSlider = 47; // "23:30"
const timeConvertingFactor = 30;
let sliderDisplay;
let checkboxOffset;

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
    Mon: [formatter(defaultStartTime), formatter(defaultEndTime)],
    Tue: [formatter(defaultStartTime), formatter(defaultEndTime)],
    Wed: [formatter(defaultStartTime), formatter(defaultEndTime)],
    Thu: [formatter(defaultStartTime), formatter(defaultEndTime)],
    Fri: [formatter(defaultStartTime), formatter(defaultEndTime)],
    Sat: [formatter(defaultStartTime), formatter(defaultEndTime)],
    Sun: [formatter(defaultStartTime), formatter(defaultEndTime)],
  });

  const formatter = (minutes) => {
    const formattedValue = formatTime(minutes * timeConvertingFactor);
    return `${formattedValue}`;
  };

  const onChangeSliderHandler = (day, minutes) => {
    const [from, to] = destructureTimeRange(minutes);
    setFormattedTimes((prevValue) => ({
      ...prevValue,
      [day]: [from, to],
    }));
  };

  const onChangeCheckboxHandler = (event) => {
    const { name, checked } = event.target;
    setDayChecked((prevValue) => ({
      ...prevValue,
      [name]: checked,
    }));
  };

  return (
    <div className="editHours">
      {days.map((day) => {
        const [startTime, endTime] = FormattedTimes[day];
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
                              onChange={(minutes) =>
                                onChangeSliderHandler(day, minutes)
                              }
                              tooltipPlacement="bottom"
                              tipFormatter={formatter}
                              style={{ display: `${sliderDisplay}` }}
                            />
                          </Form.Item>
                          <span className="formattedTimesInSpan">
                            {DayChecked[day]
                              ? "Holiday"
                              : `${startTime} - ${endTime}`}
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
                              onChange={onChangeCheckboxHandler}
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
