import React, { useEffect, useState } from "react";
import "react-day-picker/lib/style.css";
import { Steps, Modal, Button, message } from "antd";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { firebaseStore } from "../../../../../config/fbConfig";
import { notificationForm } from "../../../../../helpers/notificationForm";
import { useSelector } from "react-redux";

export default function BookNowModal(props) {
  const designer = useSelector((state) => state.selectedDesigner.selectedDesigner);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
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
  const [appointments, setAppointments] = useState([]);
  const loadingAppointment = [];

  console.log("d.uid: " + designer.uid);

  useEffect(() => {
    console.log("In booknow modal");
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
  }, []);

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
    const [starRawTime, endRawTime] = designer.hours[day][0].tradingHours;
    const closed = designer.hours[day][0].closed;
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
        if (appointment.date === dayAndDate && appointment.time === timeSlot.time) {
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

  const serviceTabData = () =>
    Object.keys(designer.services) &&
    Object.keys(designer.services)
      .filter((service) => designer.services[service].length > 0)
      .map((service) => {
        if (service.length) {
          return {
            key: service,
            tab: service,
          };
        }
      });

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
      customerId: currentUser.uid,
      designerId: designer.uid,
      customerName: currentUser.fname + " " + currentUser.lname,
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
    modalHandler();
  };

  const writeAppointmentIntoDB = async (newAppointment) => {
    firebaseStore
      .collection("appointments")
      .add(newAppointment)
      .then(function (docRef) {
        console.log("create appointment :" + docRef.id);
        firebaseStore.collection("appointments").doc(docRef.id).update({
          aid: docRef.id,
        });
      })
      .catch(function (error) {
        console.log("error :" + error);
      });
    firebaseStore
      .collection("mail")
      .add({
        to: "lkm4351@gmail.com",
        message: {
          subject: "A REQUEST ARRIVE!",
          text: "Customer A requests a new appointment.",
          html: notificationForm(designer, currentUser),
        },
      })
      .then(() => console.log("Queued email for delivery!"));
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
          services={serviceTabData(designer.services)}
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

  const { visible, modalHandler } = props;

  return (
    <div className="bookNow">
      <Modal
        className="bookNowModal"
        title="Book Now"
        visible={visible}
        footer={
          <div>
            {current === 0 && <Button className="mockData">MockData</Button>}
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
              <Button className="doneBtn" type="primary" onClick={() => requestNewAppointment()}>
                Done
              </Button>
            )}
          </div>
        }
        onCancel={modalHandler}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div id="stepToTopId">
          <Steps className="steps" current={current} onChange={onChange} progressDot>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>
        {steps[current].content}
      </Modal>
    </div>
  );
}
