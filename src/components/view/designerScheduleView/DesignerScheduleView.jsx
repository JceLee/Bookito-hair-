import React, {useEffect, useState} from "react";
import Calendar from "./calendar/Calendar";
import {useSelector} from "react-redux";
import {firebaseStore} from "../../../config/fbConfig";

export default function DesignerSchedule() {
  const currentUser = useSelector((state) => state.signIn.currentUser);
  const [conformedAppointments, setConformedAppointments] = useState([]);
  const [newRequests, setNewRequests] = useState([]);

  useEffect(() => {
    const conformed = [];
    const requests = [];
    firebaseStore
        .collection("appointments")
        .where("designerId", "==", currentUser.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            let {startDate, endDate, monthAndDate }= formatDate(doc.data().date, doc.data().time);
            if(doc.data().state === "conformed") {
              conformed.push({
                id: doc.data().uid,
                title: doc.data().customerName,
                startDate: startDate,
                endDate: endDate,
                serviceName: "Men Haircut",
                price: doc.data().totalPrice,
                phoneNumber: "7781231234",
              });
            } else if (doc.data().state === "pending") {
              requests.push({
                id: doc.data().uid,
                clientName: doc.data().customerName,
                date: monthAndDate,
                timeStart: doc.data().time,
                timeEnd: doc.data().time,
                types: ["cut", "perm"],
              });
            }
          });
          return {conformed, requests};
        }).then((data)=> {
      setConformedAppointments(data.conformed);
      setNewRequests(data.requests);
    });
  },[]);

  console.log(newRequests);

  function formatDate(data, time) {
    const [day, month, date, year] = data.split(" ");
    const timeEnd = time.split(":")[0] + ":" + (parseInt(time.split(":")[1])+29);
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


  // const newRequests = [
  //   {
  //     clientName: "Gina",
  //     date: "Aug 12",
  //     timeStart: "2:00",
  //     timeEnd: "3:00",
  //     types: ["cut", "perm"],
  //   },
  //   {
  //     clientName: "Jess",
  //     date: "Aug 12",
  //     timeStart: "2:00",
  //     timeEnd: "3:00",
  //     types: ["cut", "perm"],
  //   },
  //   {
  //     clientName: "bass",
  //     date: "Aug 14",
  //     timeStart: "5:00",
  //     timeEnd: "6:00",
  //     types: ["cut", "perm"],
  //   },
  //   {
  //     clientName: "bass",
  //     date: "Aug 13",
  //     timeStart: "5:00",
  //     timeEnd: "6:00",
  //     types: ["cut", "perm"],
  //   },
  // ];
  //
  // const appointmentArray = [
  //   {
  //     title: "Gina Kim",
  //     startDate: "2020-09-03T09:45",
  //     endDate: "2020-09-03T11:00",
  //     serviceName: "Men Haircut",
  //     price: 50,
  //     phoneNumber: "7781231234",
  //   },
  //   {
  //     title: "Gina Kim",
  //     startDate: "2020-09-04T09:45",
  //     endDate: "2020-09-04T11:00",
  //     serviceName: "Men Haircut",
  //     price: 50,
  //     phoneNumber: "7781231234",
  //   },
  //   {
  //     title: "Gina Kim",
  //     startDate: "2020-09-09T09:45",
  //     endDate: "2020-09-09T11:00",
  //     serviceName: "Men Haircut",
  //     price: 50,
  //     phoneNumber: "7781231234",
  //   },
  //   {
  //     title: "Gina Kim",
  //     startDate: "2020-09-16T09:45",
  //     endDate: "2020-09-16T11:00",
  //     serviceName: "Men Haircut",
  //     price: 50,
  //     phoneNumber: "7781231234",
  //   },
  //   {
  //     title: "Gina Kim",
  //     startDate: "2020-09-2409:45",
  //     endDate: "2020-09-24T11:00",
  //     serviceName: "Men Haircut",
  //     price: 50,
  //     phoneNumber: "7781231234",
  //   },
  //   {
  //     title: "Gina Kim",
  //     startDate: "2020-09-17T09:45",
  //     endDate: "2020-09-17T11:00",
  //     serviceName: "Men Haircut",
  //     price: 50,
  //     phoneNumber: "7781231234",
  //   },
  //   {
  //     title: "Gina Kim",
  //     startDate: "2020-09-01T09:45",
  //     endDate: "2020-09-01T11:00",
  //     serviceName: "Men Haircut",
  //     price: 50,
  //     phoneNumber: "7781231234",
  //   },
  // ];

  return (
    <div className="designerScheduleView">
      <Calendar newRequests={newRequests} appointmentArray={conformedAppointments} />
    </div>
  );
}
