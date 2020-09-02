import React, { useState, useEffect } from "react";
import "react-day-picker/lib/style.css";
import "../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss";
import { Steps, Modal, Button, message } from "antd";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const timeSelect = [
  { time: "09:00", disabled: false },
  { time: "09:30", disabled: false },
  { time: "10:00", disabled: false },
  { time: "10:30", disabled: true },
  { time: "11:00", disabled: false },
  { time: "11:30", disabled: false },
  { time: "12:00", disabled: false },
  { time: "12:30", disabled: false },
  { time: "13:00", disabled: true },
  { time: "13:30", disabled: false },
  { time: "14:00", disabled: false },
  { time: "14:30", disabled: false },
  { time: "15:00", disabled: true },
  { time: "15:30", disabled: false },
  { time: "16:00", disabled: false },
  { time: "16:30", disabled: true },
  { time: "17:00", disabled: false },
  { time: "17:30", disabled: false },
  { time: "18:00", disabled: false },
  { time: "18:30", disabled: false },
];

const servicesContent = {
  Cut: [
    {
      id: 1,
      service: "Men Cut",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 2,
      service: "Women Cut",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 3,
      service: "Kids Cut",
      price: 15,
      description: "The price may differ",
    },
  ],
  Style: [
    {
      id: 4,
      service: "Men Style",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 5,
      service: "Women Style",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 6,
      service: "Kids Style",
      price: 15,
      description: "The price may differ",
    },
  ],
  Perm: [
    {
      id: 7,
      service: "Men Perm",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 8,
      service: "Women Perm",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 9,
      service: "Kids Perm",
      price: 15,
      description: "The price may differ",
    },
  ],
  Color: [
    {
      id: 10,
      service: "Men Color",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 11,
      service: "Women Color",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 12,
      service: "Kids Color",
      price: 15,
      description: "The price may differ",
    },
  ],
  Clinic: [
    {
      id: 13,
      service: "Men Clinic",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 14,
      service: "Women Clinic",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 15,
      service: "Kids Clinic",
      price: 15,
      description: "The price may differ",
    },
  ],
  Promo: [
    {
      id: 16,
      service: "Men Promo",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 17,
      service: "Women Promo",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 18,
      service: "Kids Promo",
      price: 15,
      description: "The price may differ",
    },
  ],
};

export default function DesignerSchedule() {
  const { Step } = Steps;
  const [displayedDay, setDisplayedDay] = useState(null);
  const [key, setKey] = useState("Cut");
  const [calculationBox, setCalculationBox] = useState([]);
  const [page, setPage] = useState("Estimated Price");
  const [current, setCurrent] = useState(0);
  const [bookingTime, setBookingTime] = useState("");

  const totalSum = () => {
    return Object.values(calculationBox).reduce((sum, service) => {
      if (!service) {
        return sum;
      }
      return sum + service.price;
    }, 0);
  };

  const serviceTabData = () =>
    Object.keys(servicesContent) &&
    Object.keys(servicesContent)
      .filter((service) => servicesContent[service].length > 0)
      .map((service) => {
        if (service.length) {
          return {
            key: service,
            tab: service,
          };
        }
      });

  const finalBookingObject = {
    customerId: "", // need to be added
    designerId: "", // need to be added
    date: displayedDay,
    time: bookingTime,
    bookedServices: calculationBox,
    totalPrice: totalSum(),
  };

  const onChange = (current) => {
    setCurrent(current);
  };

  const next = () => {
    if (displayedDay && bookingTime) {
      setCurrent(current + 1);
    } else {
      return message.error({
        content: "ERROR!",
      });
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const navigateTo = (rightPage) => {
    setPage(rightPage);
  };

  const handleDayClick = (day, { selected }) => {
    setDisplayedDay(selected ? undefined : day);
  };

  const onRadioChange = (hour) => {
    console.log(hour.target.value);
    setBookingTime(hour.target.value);
  };

  const onTabChange = (key) => {
    setKey(key);
  };

  const removeFromBox = (serviceToRemove) => {
    let newCalculationBox = { ...calculationBox };

    for (let [key, value] of Object.entries(newCalculationBox)) {
      if (serviceToRemove === value) {
        console.log(newCalculationBox[key]);
        newCalculationBox[key] = null;
        console.log(newCalculationBox[key]);
      }
    }

    setCalculationBox(newCalculationBox);
  };

  const loadSuccessMessage = () => {
    console.log(finalBookingObject);
    message.success("Successfully booked!");
  };

  const getServiceContent = () => {
    let contentString = "";
    for (let [key, value] of Object.entries(calculationBox)) {
      if (value === null) {
        continue;
      }
      let { service } = value;
      contentString += `[${service}]` + " ";
    }
    return contentString;
  };

  const stepChoice = (item) => {
    if (item.id === 1 || item.id === 2) {
      setCurrent(current - 2);
    } else {
      setCurrent(current - 1);
    }
  };

  const steps = [
    {
      title: "Date and time",
      content: (
        <StepOne
          timeSelection={timeSelect}
          displayedDay={displayedDay}
          handleDay={handleDayClick}
          radioChange={onRadioChange}
          bookingTime={bookingTime}
          setBookingTime={setBookingTime}
        />
      ),
    },
    {
      title: "Service and estimated price",
      content: (
        <StepTwo
          services={serviceTabData(servicesContent)}
          servicesContent={servicesContent}
          serviceKey={key}
          calculationBox={calculationBox}
          setCalculationBox={setCalculationBox}
          page={page}
          navigateTo={navigateTo}
          onTabChange={onTabChange}
          removeFromBox={removeFromBox}
          totalSum={totalSum}
        />
      ),
    },
    {
      title: "Final check",
      content: (
        <StepThree
          current={current}
          setCurrent={setCurrent}
          displayedDay={displayedDay}
          bookingTime={bookingTime}
          calculationBox={calculationBox}
          getServiceContent={getServiceContent}
          stepChoice={stepChoice}
        />
      ),
    },
  ];

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  window.history.pushState("", document.title, window.location.pathname);

  return (
    <div className="bookNow">
      <Button type="primary" onClick={showModal}>
        Book Now
      </Button>

      <Modal
        className="bookNowModal"
        title="Book Now"
        visible={visible}
        width="100vw"
        bodyStyle={{ height: "83.5vh" }}
        footer={
          <div className="stepAction">
            {current > 0 && (
              <Button
                className="previousBtn"
                href="#stepToTopId"
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button
                className="nextBtnInStepOne"
                href="#stepToTopId"
                type="primary"
                style={{ position: "absolute", right: 0 }}
                onClick={() => next()}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                className="DoneBtn"
                type="primary"
                onClick={() => loadSuccessMessage()}
              >
                Done
              </Button>
            )}
          </div>
        }
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div className="stepsClass" id="stepToTopId">
          <Steps current={current} onChange={onChange}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>

        <div className="stepsContent">{steps[current].content}</div>
      </Modal>
    </div>
  );
}
