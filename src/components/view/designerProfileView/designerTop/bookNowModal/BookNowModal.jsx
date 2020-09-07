import React, { useEffect, useState } from "react";
import "react-day-picker/lib/style.css";
import "../../../../../assets/scss/view/designerProfileView/bookNowModal/BookNowModal.scss";
import { Steps, Modal, Button, message } from "antd";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

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
      id: 1,
      service: "Men Style",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 2,
      service: "Women Style",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 3,
      service: "Kids Style",
      price: 15,
      description: "The price may differ",
    },
  ],
  Perm: [
    {
      id: 1,
      service: "Men Perm",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 2,
      service: "Women Perm",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 3,
      service: "Kids Perm",
      price: 15,
      description: "The price may differ",
    },
  ],
  Color: [
    {
      id: 1,
      service: "Men Color",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 2,
      service: "Women Color",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 3,
      service: "Kids Color",
      price: 15,
      description: "The price may differ",
    },
  ],
  Clinic: [
    {
      id: 1,
      service: "Men Clinic",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 2,
      service: "Women Clinic",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 3,
      service: "Kids Clinic",
      price: 15,
      description: "The price may differ",
    },
  ],
  Promo: [
    {
      id: 1,
      service: "Men Promo",
      price: 35,
      description: "The price may differ",
    },
    {
      id: 2,
      service: "Women Promo",
      price: 40,
      description: "The price may differ",
    },
    {
      id: 3,
      service: "Kids Promo",
      price: 15,
      description: "The price may differ",
    },
  ],
};

export default function BookNowModal(props) {
  const { hours } = props;
  const { Step } = Steps;
  const [displayedDay, setDisplayedDay] = useState(null);
  const [key, setKey] = useState("Cut");
  const [calculationBox, setCalculationBox] = useState([]);
  const [page, setPage] = useState("Estimated Price");
  const [current, setCurrent] = useState(0);
  const [bookingTime, setBookingTime] = useState("");
  const [backToTimePosition, setBackToTimePosition] = useState(false);
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
      { date: "Thu Sep 03 2020", time: "08:00" },
      { date: "Wed Sep 02 2020", time: "08:30" },
      { date: "Wed Sep 09 2020", time: "09:00" },
      { date: "Wed Sep 16 2020", time: "11:00" },
      { date: "Wed Sep 23 2020", time: "12:00" },
      { date: "Wed Sep 30 2020", time: "12:30" },
      { date: "Wed Sep 02 2020", time: "15:00" },
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
      elementForScrollingTopInModal.scrollIntoView();
      setCurrent(current + 1);
    } else {
      return message.error({
        content: "ERROR!",
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
    setBookingTime(hour.target.value);
  };

  const onTabChange = (key) => {
    setKey(key);
  };

  const removeFromBox = (serviceToRemove) => {
    let newCalculationBox = { ...calculationBox };

    for (let [key, value] of Object.entries(newCalculationBox)) {
      if (serviceToRemove === value) {
        newCalculationBox[key] = null;
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

  useEffect(() => {
    if (backToTimePosition) {
      document.getElementById("selectTimePosition").scrollIntoView();
    }
    setBackToTimePosition(false);
  });

  const stepChoice = (item) => {
    if (item.id === 1) {
      setCurrent(current - 2);
    } else if (item.id === 2) {
      setCurrent(current - 2);
    } else {
      setCurrent(current - 1);
    }
  };

  const steps = [
    {
      title: "Date and Time",
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
      title: "Service and Price",
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
      title: "Final Check",
      content: (
        <StepThree
          current={current}
          setCurrent={setCurrent}
          displayedDay={displayedDay}
          bookingTime={bookingTime}
          calculationBox={calculationBox}
          getServiceContent={getServiceContent}
          stepChoice={stepChoice}
          setBackToTimePosition={setBackToTimePosition}
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

  return (
    <div className="bookNow">
      <Button className="buttonInProfileLayoutTab" onClick={showModal}>
        Book Now
      </Button>

      <Modal
        className="bookNowModal"
        title="Book Now"
        visible={visible}
        // width="100vw"
        // bodyStyle={{ height: "85vh" }}
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
                className="doneBtn"
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
          <Steps current={current} onChange={onChange} progressDot>
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
