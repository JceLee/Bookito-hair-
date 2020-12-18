import React, {useEffect, useState} from "react";
import Calendar from "./calendar/Calendar";
import {useSelector} from "react-redux";
import {firebaseStore} from "../../../config/fbConfig";

export default function DesignerSchedule() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [conformedAppointments, setConformedAppointments] = useState([]);
  const [newRequests, setNewRequests] = useState([]);

  useEffect(() => {
    loadAppointment();
  }, []);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadAppointment = () => {
    const conformed = [];
    firebaseStore
      .collection("appointments")
      .where("designerId", "==", currentUser.uid)
      .where("state", "==", "conformed")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          let {startDate, endDate, monthAndDate} = formatDate(doc.data().date, doc.data().time);
          conformed.push({
            id: doc.data().aid,
            title: doc.data().customerName,
            startDate: startDate,
            endDate: endDate,
            serviceName: createTag(doc.data().bookedServices).serviceName,
            price: doc.data().totalPrice,
            phoneNumber: "7781231234",
          });
        });
        return conformed;
      }).then((data) => {
      setConformedAppointments(conformed);
    });
  };

  const loadRequests = () => {
    const requests = [];
    firebaseStore
      .collection("appointments")
      .where("designerId", "==", currentUser.uid)
      .where("state", "==", "pending")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          let {monthAndDate} = formatDate(doc.data().date, doc.data().time);
            requests.push({
              id: doc.data().aid,
              clientName: doc.data().customerName,
              date: monthAndDate,
              timeStart: doc.data().time,
              timeEnd: doc.data().time,
              types: createTag(doc.data().bookedServices).types,
              price: doc.data().totalPrice,
            });
        });
        return requests;
      }).then((data) => {
      setNewRequests(requests);
    });
  };

  const createTag = (services) => {
    const returnValue = {
      serviceName : "",
      types: [],
    };
    const tags = Object.keys(services);
    tags.forEach(e => {
      returnValue.serviceName += services[e].service + " ";
      returnValue.types.push(services[e].service);
    });
    return returnValue;
  }

  const formatDate = (data, time) => {
    const [day, month, date, year] = data.split(" ");
    const timeEnd = time.split(":")[0] + ":" + (parseInt(time.split(":")[1]) + 29);
    const dateHash = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    };
    const startDate = `${year}-${dateHash[month]}-${date}T${time}`;
    const endDate = `${year}-${dateHash[month]}-${date}T${timeEnd}`;
    const monthAndDate = `${month} ${date}`;
    return {startDate, endDate, monthAndDate}
  }

  return (
    <div className="designerScheduleView">
      <Calendar newRequests={newRequests} appointmentArray={conformedAppointments} forceUpdate={loadAppointment}/>
    </div>
  );
}
