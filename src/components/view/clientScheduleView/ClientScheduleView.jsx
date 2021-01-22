import React, {useEffect, useState} from "react";
import {Tabs, Row} from "antd";
import ScheduleCard from "../../commonComponents/ScheduleCard";
import ScheduleCardHistory from "../../commonComponents/ScheduleCardHistory";
import {useSelector} from "react-redux";
import {firebaseStore} from "../../../config/fbConfig";
import {useHistory} from "react-router-dom";

const {TabPane} = Tabs;

export default function ClientSchedule() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [confirmedAppointment, setConfirmedAppointments] = useState([]);
  const [pendingAppointment, setPendingAppointments] = useState([]);
  const [completedAndDeclinedAppointment, completedAndDeclinedAppointments] = useState([]);

  const history = useHistory();

  useEffect(() => {
    sendToMainViewWhenCurrentUserIsNull(currentUser);
    loadAppointment();
  }, [currentUser]);

  const sendToMainViewWhenCurrentUserIsNull = (user) => {
    if (user === null) {
      const route = "/";
      history.push(route);
    }
  };

  const loadAppointment = () => {
    const confirmed = [];
    const pending = [];
    const completedAndDeclined = [];
    firebaseStore
      .collection("appointments")
      .where("customerId", "==", currentUser.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          const dateObj = new Date(doc.data().date.slice(), doc.data().date.slice(), doc.data().date.slice())
          console.log(new Date().toDateString());
          console.log(doc.data().date);
          if (doc.data().state === "conformed") {
            confirmed.push(doc.data());
          } else if (doc.data().state === "pending") {
            pending.push(doc.data());
          } else {
            completedAndDeclined.push(doc.data());
          }
        });
        return {confirmed, pending, completedAndDeclined};
      })
      .then((data) => {
        setConfirmedAppointments(data.confirmed);
        setPendingAppointments(data.pending);
        completedAndDeclinedAppointments(data.completedAndDeclined);
      });
  };

  const printServices = (bookedServices) => {
    var services = "";
    var count = 1;
    for (const [category, subCategory] of Object.entries(bookedServices)) {
      services += subCategory.service;
      if (count++ !== Object.keys(bookedServices).length) services += ", ";
    }
    return services;
  };

  return (
    <div className="clientSchedule">
      <div className="clientProfileTitle">Your Appointments</div>
      <Tabs className="clientScheduleTabs" defaultActiveKey="1">
        <TabPane className="upcomingTab" tab="Upcoming" key="1">
          <Row className="clientScheduleViewRow">
            {confirmedAppointment.map((appointment, inx) => (
              <ScheduleCard key={inx} appointment={appointment} printServices={printServices}/>
            ))}
          </Row>
        </TabPane>
        <TabPane className="pendingTab" tab="Pending" key="2">
          <Row className="clientScheduleViewRow">
            {pendingAppointment.map((appointment, inx) => (
              <ScheduleCard key={inx} appointment={appointment} printServices={printServices}/>
            ))}
          </Row>

        </TabPane>
        <TabPane className="historyTab" tab="History" key="3">
          <Row className="clientScheduleViewRow">
            {completedAndDeclinedAppointment.map((appointment, inx) => (
              <ScheduleCardHistory
                key={inx}
                appointment={appointment}
                cardInx={inx}
                printServices={printServices}
              />
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
}
