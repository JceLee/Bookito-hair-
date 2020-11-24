import React, {useEffect, useState} from "react";
import { Tabs, Row } from "antd";
import ScheduleCard from "../../commonComponents/ScheduleCard";
import ScheduleCardHistory from "../../commonComponents/ScheduleCardHistory";
import {useSelector} from "react-redux";
import {firebaseStore} from "../../../config/fbConfig";
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

export default function ClientSchedule() {
  const currentUser = useSelector((state) => state.signIn.currentUser);
  const [confirmedAppointments, setconfirmedAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [completedAndDeclinedAppointments, setCompletedAndDeclinedAppointments] = useState([]);
  
  const history = useHistory();

  const sendToMainViewWhenCurrentUserIsNull = (user) => {
    if(user === null) {
      const route = "/";
      history.push(route);
    }
  };

  const loadAppointment = () => {
    const confirmed = [];
    const pending = [];
    const completedAndDeclined = [];
    const services = [];
    firebaseStore
        .collection("appointments")
        .where("customerId", "==", currentUser.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            if (doc.data().state === "confirmed") {
              confirmed.push(doc.data());
            } else if (doc.data().state === "pending") {
              pending.push(doc.data());
            } else {
              completedAndDeclined.push(doc.data());
            }
          });
          return {confirmed, pending, completedAndDeclined};
        }).then((data)=> {
      setconfirmedAppointments(data.confirmed);
      setPendingAppointments(data.pending);
      setCompletedAndDeclinedAppointments(data.completedAndDeclined);
    });
  };

  useEffect(() => {
    sendToMainViewWhenCurrentUserIsNull(currentUser);
    loadAppointment();
  }, []);

  const loadServices = (bookedServices) => {
    let services = [];
    let keys = Object.keys(bookedServices);
    
    keys.forEach(key => {
      console.log(bookedServices[key].service);
      services.push(bookedServices[key].service);
    })

    return services;
  }

  return (
    <div className="clientSchedule">
      <div className="yourAppointments">Your Appointments</div>
      <Tabs className="clientScheduleTabs" defaultActiveKey="1">
        <TabPane className="upcomingTab" tab="Upcoming" key="1">
          <Row className="clientScheduleViewRow">
            
            {confirmedAppointments.map((appointment, id)=> (
                <ScheduleCard
                    name={appointment.designerName}
                    date={appointment.date}
                    time={appointment.time}
                    appointmentId={appointment.aid}
                    designerId={appointment.designerId}
                    types={loadServices(appointment["bookedServices"])}
                />
            ))}
          </Row>
        </TabPane>
        <TabPane className="pendingTab" tab="Pending" key="2">
          <Row className="clientScheduleViewRow">
            {pendingAppointments.map((appointment)=> (
                <ScheduleCard
                    name={appointment.designerName}
                    date={appointment.date}
                    time={appointment.time}
                    appointmentId={appointment.aid}
                    designerId={appointment.designerId}
                    types={["cut", "perm"]}
                />
            ))}
          </Row>
        </TabPane>
        <TabPane className="historyTab" tab="History" key="3">
          <Row className="clientScheduleViewRow">
            {completedAndDeclinedAppointments.map((appointment)=> (
                <ScheduleCardHistory
                    name={appointment.designerName}
                    date={appointment.date}
                    time={appointment.time}
                    appointmentId={appointment.aid}
                    designerId={appointment.designerId}
                    types={["cut", "perm"]}
                />
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
}
