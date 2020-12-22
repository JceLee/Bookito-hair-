import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Checkbox, Form, Slider } from "antd";
import formatTime, { destructureTimeRange } from "../../../../../helpers/timeFunctions";
import BlackBtn from "../../../../commonComponents/BlackBtn";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const minValueInSlider = 0; // "00:00"

const maxValueInSlider = 47; // "23:30"

const timeConvertingFactor = 30;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

let sliderVisibility;

let checkboxOffset;

export default function HoursForm() {
  const designer = useSelector((state) => state.selectedDesigner.selectedDesigner);

  const [form] = Form.useForm();

  const [DayChecked, setDayChecked] = useState({
    Mon: designer.hours["Mon"][0]["closed"],
    Tue: designer.hours["Tue"][0]["closed"],
    Wed: designer.hours["Wed"][0]["closed"],
    Thu: designer.hours["Thu"][0]["closed"],
    Fri: designer.hours["Fri"][0]["closed"],
    Sat: designer.hours["Sat"][0]["closed"],
    Sun: designer.hours["Sun"][0]["closed"],
  });

  let formInitialValues = {
    hours: {
      Mon: [
        {
          tradingHours: designer.hours["Mon"][0]["tradingHours"],
          closed: designer.hours["Mon"][0]["closed"],
        },
      ],
      Tue: [
        {
          tradingHours: designer.hours["Tue"][0]["tradingHours"],
          closed: designer.hours["Tue"][0]["closed"],
        },
      ],
      Wed: [
        {
          tradingHours: designer.hours["Wed"][0]["tradingHours"],
          closed: designer.hours["Wed"][0]["closed"],
        },
      ],
      Thu: [
        {
          tradingHours: designer.hours["Thu"][0]["tradingHours"],
          closed: designer.hours["Thu"][0]["closed"],
        },
      ],
      Fri: [
        {
          tradingHours: designer.hours["Fri"][0]["tradingHours"],
          closed: designer.hours["Fri"][0]["closed"],
        },
      ],
      Sat: [
        {
          tradingHours: designer.hours["Sat"][0]["tradingHours"],
          closed: designer.hours["Sat"][0]["closed"],
        },
      ],
      Sun: [
        {
          tradingHours: designer.hours["Sun"][0]["tradingHours"],
          closed: designer.hours["Sun"][0]["closed"],
        },
      ],
    },
  };

  const formatter = (minutes) => {
    const formattedValue = formatTime(minutes * timeConvertingFactor);
    return `${formattedValue}`;
  };

  const [FormattedTimes, setFormattedTimes] = useState({
    Mon: [
      formatter(designer.hours["Mon"][0]["tradingHours"][0]),
      formatter(designer.hours["Mon"][0]["tradingHours"][1]),
    ],
    Tue: [
      formatter(designer.hours["Tue"][0]["tradingHours"][0]),
      formatter(designer.hours["Tue"][0]["tradingHours"][1]),
    ],
    Wed: [
      formatter(designer.hours["Wed"][0]["tradingHours"][0]),
      formatter(designer.hours["Wed"][0]["tradingHours"][1]),
    ],
    Thu: [
      formatter(designer.hours["Thu"][0]["tradingHours"][0]),
      formatter(designer.hours["Thu"][0]["tradingHours"][1]),
    ],
    Fri: [
      formatter(designer.hours["Fri"][0]["tradingHours"][0]),
      formatter(designer.hours["Fri"][0]["tradingHours"][1]),
    ],
    Sat: [
      formatter(designer.hours["Sat"][0]["tradingHours"][0]),
      formatter(designer.hours["Sat"][0]["tradingHours"][1]),
    ],
    Sun: [
      formatter(designer.hours["Sun"][0]["tradingHours"][0]),
      formatter(designer.hours["Sun"][0]["tradingHours"][1]),
    ],
  });

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

  const yes = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="editProfile"
      initialValues={formInitialValues}
      scrollToFirstError
      onFinish={yes}
    >
      <div className="editHours">
        {days.map((day) => {
          const [startTime, endTime] = FormattedTimes[day];
          return (
            <div key={day}>
              <Form.List name={["hours", `${day}`]}>
                {(fields) => {
                  return (
                    <div>
                      {fields.map((field, index) => {
                        {
                          DayChecked[day]
                            ? (sliderVisibility = "hidden")
                            : (sliderVisibility = "visible");
                        }
                        return (
                          <div key={index} className="singleDaySliderCheckbox">
                            <Form.Item
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
                            <Form.Item
                              name={[field.name, "tradingHours"]}
                              className="hoursFormItem"
                              fieldKey={[field.fieldKey, "tradingHours"]}
                              valuePropName="value"
                              label={day}
                              colon={false}
                            >
                              <Slider
                                allowCross={false}
                                range
                                min={minValueInSlider}
                                max={maxValueInSlider}
                                disabled={DayChecked[day]}
                                onChange={(minutes) => onChangeSliderHandler(day, minutes)}
                                tooltipPlacement="bottom"
                                tipFormatter={formatter}
                                style={{ visibility: `${sliderVisibility}` }}
                              />
                            </Form.Item>
                            <span className="formattedTimesInSpan">
                              {DayChecked[day] ? "Holiday" : `${startTime} - ${endTime}`}
                            </span>
                          </div>
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
      <BlackBtn btnName="Save" onClick={yes} />
    </Form>
  );
}
