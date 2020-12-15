import React, { useEffect, useState } from "react";
import { Tabs, Row } from "antd";
import ScheduleCard from "../../commonComponents/ScheduleCard";
import ScheduleCardHistory from "../../commonComponents/ScheduleCardHistory";
import { useSelector } from "react-redux";
import { firebaseStore } from "../../../config/fbConfig";
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

export default function ClientSchedule() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [conformedAppointment, setConformedAppointments] = useState([]);
  const [pendingAppointment, setPendingAppointments] = useState([]);
  const [completedAndDeclinedAppointment, completedAndDeclinedAppointments] = useState([]);

  const history = useHistory();

  const sendToMainViewWhenCurrentUserIsNull = (user) => {
    if (user === null) {
      const route = "/";
      history.push(route);
    }
  };

  const loadAppointment = () => {
    const conformed = [];
    const pending = [];
    const completedAndDeclined = [];
    firebaseStore
      .collection("appointments")
      .where("customerId", "==", currentUser.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          if (doc.data().state === "conformed") {
            conformed.push(doc.data());
          } else if (doc.data().state === "pending") {
            pending.push(doc.data());
          } else {
            completedAndDeclined.push(doc.data());
          }
        });
        return { conformed, pending, completedAndDeclined };
      })
      .then((data) => {
        setConformedAppointments(data.conformed);
        setPendingAppointments(data.pending);
        completedAndDeclinedAppointments(data.completedAndDeclined);
      });
  };

  useEffect(() => {
    sendToMainViewWhenCurrentUserIsNull(currentUser);
    loadAppointment();
  }, []);

  return (
    <div className="clientSchedule">
      <div className="clientProfileTitle">Your Appointments</div>
      <Tabs className="clientScheduleTabs" defaultActiveKey="1">
        <TabPane className="upcomingTab" tab="Upcoming" key="1">
          <Row className="clientScheduleViewRow">
            {conformedAppointment.map((appointment) => (
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
        <TabPane className="pendingTab" tab="Pending" key="2">
          <Row className="clientScheduleViewRow">
            {pendingAppointment.map((appointment) => (
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
            {completedAndDeclinedAppointment.map((appointment) => (
              <ScheduleCardHistory appointment={appointment} />
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
}
