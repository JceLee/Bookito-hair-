import React, { useEffect, useState } from "react";
import "react-day-picker/lib/style.css";
import "../../../assets/scss/view/designerScheduleView/DesignerScheduleView.scss";
import { Steps, Modal, Button, message } from "antd";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { firebaseStore } from "../../../config/fbConfig";

const services = [
  { key: "Cut", tab: "Cut" },
  { key: "Style", tab: "Style" },
  { key: "Perms", tab: "Perms" },
  { key: "Colors", tab: "Colors" },
  { key: "Clinic", tab: "Clinic" },
  { key: "Promo", tab: "Promo" },
];

export default function DesignerSchedule(props) {
  const { hours, customer, designer } = props;
  const { Step } = Steps;
  const [displayedDay, setDisplayedDay] = useState(null);
  const [key, setKey] = useState("Cut");
  const [calculationBox, setCalculationBox] = useState([]);
  const [page, setPage] = useState("Estimated Price");
  const [current, setCurrent] = useState(0);
  const [bookingTime, setBookingTime] = useState("");
  const [timeSelect, setTimeSelect] = useState([]);
  const elementForScrollingTopInModal = document.getElementById("stepToTopId");
  const [appointments, setAppointments] = useState([]);
  const loadingAppointment = [];

  useEffect(() => {
    firebaseStore
      .collection("appointments")
      .where("designerId", "==", designer.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          loadingAppointment.push(doc.data());
        });
        setAppointments(loadingAppointment);
      });
  }, [appointments]);

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
      Object.values(appointments).forEach((appointment) => {
        if (
          appointment.date === dayAndDate &&
          appointment.time === timeSlot.time
        ) {
          timeSlot.disabled = true;
        }
      });
    });
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

  const requestNewAppointment = () => {
    const newAppointment = {
      customerId: customer.uid,
      designerId: designer.uid,
      customerName: customer.fname + " " + customer.lname,
      designerName: designer.fname + " " + designer.lname,
      state: "pending",
      date: displayedDay.toDateString(),
      time: bookingTime,
      bookedServices: calculationBox,
      totalPrice: totalSum(),
    };
    console.log(newAppointment);
    message.success("Successfully booked!");
    writeAppointmentIntoDB(newAppointment);
  };

  const writeAppointmentIntoDB = async (newAppointment) => {
    firebaseStore
      .collection("appointments")
      .add(newAppointment)
      .then(function (docRef) {
        console.log("create appointment :" + docRef.id);
      })
      .catch(function (error) {
        console.log("error :" + error);
      });
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
          servicesContent={designer.services}
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
                onClick={() => requestNewAppointment()}
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
