import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Form, Slider, message } from "antd";
import { refresh } from "../../../../../actions/currentUser";
import { firebaseStore } from "../../../../../config/fbConfig";
import formatTime, {
  destructureTimeRange,
} from "../../../../../helpers/timeFunctions";
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

export default function HoursForm(props) {
  const { designer, createMode, formInitialValues } = props;
  const dispatch = useDispatch();

  const [DayChecked, setDayChecked] = useState({
    Mon: designer.hours["Mon"][0]["closed"],
    Tue: designer.hours["Tue"][0]["closed"],
    Wed: designer.hours["Wed"][0]["closed"],
    Thu: designer.hours["Thu"][0]["closed"],
    Fri: designer.hours["Fri"][0]["closed"],
    Sat: designer.hours["Sat"][0]["closed"],
    Sun: designer.hours["Sun"][0]["closed"],
  });

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
    console.log(minutes);
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

  // save profile to db and reload page
  const onFinish = (values) => {
    const updatedInfo = {
      ...designer,
      hours: values.hours,
    };
    Object.assign(designer, updatedInfo); // Update local client
    dispatch(refresh(designer)); // Update redux client
    // Update firebase
    firebaseStore
      .collection("users")
      .doc(designer.uid)
      .update({
        hours: values.hours,
      })
      .then(function () {
        return message.success({
          content: "Saved",
          duration: "2",
          className: "onFinishMessage",
        });
      });
  };

  const formArea = (
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
                          <span className="hoursFormSliderLabel">
                            {day}
                          </span>
                          <Form.Item
                            name={[field.name, "tradingHours"]}
                            className="hoursFormItem"
                            fieldKey={[field.fieldKey, "tradingHours"]}
                            valuePropName="value"
                            colon={false}
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
                              style={{ visibility: `${sliderVisibility}` }}
                            />
                          </Form.Item>
                          <span className="formattedTimesInSpan">
                            {DayChecked[day]
                              ? "Holiday"
                              : `${startTime} - ${endTime}`}
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
  );

  return (
    <>
      {createMode ? (
        formArea
      ) : (
        <Form
          {...layout}
          name="editProfile"
          initialValues={formInitialValues}
          scrollToFirstError
          onFinish={onFinish}
        >
          {formArea}
          <BlackBtn btnName="Save" htmlType="submit" />
        </Form>
      )}
    </>
  );
}
