import React, { useEffect, useState } from "react";
import "react-day-picker/lib/style.css";
import "../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss";
import { Steps, Result, Modal, Button, message, Checkbox } from "antd";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const services = [
  { key: "Cut", tab: "Cut" },
  { key: "Style", tab: "Style" },
  { key: "Perms", tab: "Perms" },
  { key: "Colors", tab: "Colors" },
  { key: "Clinic", tab: "Clinic" },
  { key: "Promo", tab: "Promo" },
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
  Perms: [
    {
      id: 7,
      service: "Men Perms",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 8,
      service: "Women Perms",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 9,
      service: "Kids Perms",
      price: 15,
      description: "The price may differ",
    },
  ],
  Colors: [
    {
      id: 10,
      service: "Men Colors",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 11,
      service: "Women Colors",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 12,
      service: "Kids Colors",
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

export default function DesignerSchedule(props) {
  const { hours } = props;
  const { Step } = Steps;
  const [displayedDay, setDisplayedDay] = useState(null);
  const [key, setKey] = useState("Cut");
  const [calculationBox, setCalculationBox] = useState([]);
  const [page, setPage] = useState("Estimated Price");
  const [current, setCurrent] = useState(0);
  const [bookingTime, setBookingTime] = useState("");
  const [timeSelect, setTimeSelect] = useState([]);
  const elementForScrollingTopInModal = document.getElementById("stepToTopId");

  let timeSlotTemplate = {
    time: null,
    disabled: false,
  };

  const formatTime = (value) => {
    value = value > 1439 ? 1439 : value;
    let hours = Math.floor(value / 60);
    let minutes = value - hours * 60;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (minutes === 0) minutes = "00";
    return `${hours}:${minutes}`;
  };

  const createTimeSelect = (dayAndDate) => {
    const day = dayAndDate.substring(0, 3);
    const appointmentArray = [
      {
        date: "Thu Sep 03 2020",
        time: "08:00",
        serviceName: "Male hair cut",
        price: 50,
        userName: "ddddddd",
      },
      {
        date: "Wed Sep 02 2020",
        time: "08:30",
        serviceName: "Male hair cut",
        price: 50,
        userName: "ddddddd",
      },
      {
        date: "Wed Sep 09 2020",
        time: "09:00",
        serviceName: "Male hair cut",
        price: 50,
        userName: "ddddddd",
      },
      {
        date: "Wed Sep 16 2020",
        time: "11:00",
        serviceName: "Male hair cut",
        price: 50,
        userName: "ddddddd",
      },
      {
        date: "Wed Sep 23 2020",
        time: "12:00",
        serviceName: "Male hair cut",
        price: 50,
        userName: "ddddddd",
      },
      {
        date: "Wed Sep 30 2020",
        time: "12:30",
        serviceName: "Male hair cut",
        price: 50,
        userName: "ddddddd",
      },
      {
        date: "Wed Sep 02 2020",
        time: "15:00",
        serviceName: "Male hair cut",
        price: 50,
        userName: "ddddddd",
      },
    ];
    const [starRawTime, endRawTime] = hours[day][0].tradingHours;
    const closed = hours[day][0].closed;
    const temp = [];
    for (let i = starRawTime * 30; i <= endRawTime * 30; i += 30) {
      timeSlotTemplate = {
        ...timeSlotTemplate,
        time: formatTime(i),
        disabled: closed,
      };
      temp.push(timeSlotTemplate);
    }

    Object.values(temp).forEach((timeSlot) => {
      Object.values(appointmentArray).forEach((appointment) => {
        if (
          appointment.date === dayAndDate &&
          appointment.time === timeSlot.time
        ) {
          timeSlot.disabled = true;
          // console.log("appointment: ", appointment.time);
          // console.log("matched timeSlot: ", timeSlot.time);
        }
      });
    });
    // console.log(temp);
    setTimeSelect(temp);
    return timeSelect;
  };

  const totalSum = () => {
    return Object.values(calculationBox).reduce((sum, service) => {
      if (!service) {
        return sum;
      }
      return sum + service.price;
    }, 0);
  };

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
      elementForScrollingTopInModal.scrollIntoView();
      setCurrent(current + 1);
    } else {
      return message.error({
        content: "ERROR!",
        // className: 'custom-class',
        // style: {
        //   marginTop: '40vh',
        //   width: '200px',
        //   height: '100px',
        // },
      });
    }
  };

  const prev = () => {
    elementForScrollingTopInModal.scrollIntoView();
    setCurrent(current - 1);
  };

  const navigateTo = (rightPage) => {
    setPage(rightPage);
  };

  const handleDayClick = (day, { selected }) => {
    setDisplayedDay(selected ? undefined : day);
  };

  useEffect(() => {
    if (displayedDay != null) {
      createTimeSelect(displayedDay.toDateString());
    }
  }, [displayedDay]);

  const onRadioChange = (hour) => {
    // console.log(hour.target.value);
    setBookingTime(hour.target.value);
  };

  const onTabChange = (key) => {
    setKey(key);
  };

  const removeFromBox = (serviceToRemove) => {
    let newCalculationBox = { ...calculationBox };

    for (let [key, value] of Object.entries(newCalculationBox)) {
      if (serviceToRemove === value) {
        // console.log(newCalculationBox[key]);
        newCalculationBox[key] = null;
        // console.log(newCalculationBox[key]);
      }
    }

    setCalculationBox(newCalculationBox);
  };

  const loadSuccessMessage = () => {
    // console.log(finalBookingObject);
    message.success("Successfully booked!");
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
          services={services}
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
        />
      ),
    },
  ];

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  // const handleOk = () => {
  //   setVisible(false);
  // };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="bookNow">
      <Button className="buttonInProfileLayoutTab" onClick={showModal}>
        Book Now
      </Button>

      <Modal
        className="bookNowModal"
        title="Book Now"
        visible={visible}
        footer={
          <div className="stepAction">
            {current > 0 && (
              <Button className="previousBtn" onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button
                className="nextBtnInStepOne"
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
        // okText='Save Schedule'
        onCancel={handleCancel}
        // okButtonProps={{ style: { display: 'none' } }}
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
