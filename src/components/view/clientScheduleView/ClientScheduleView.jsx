import React, {useEffect, useState} from "react";
import { Tabs, Row } from "antd";
import ScheduleCard from "../../commonComponents/ScheduleCard";
import ScheduleCardHistory from "../../commonComponents/ScheduleCardHistory";
import {useSelector} from "react-redux";
import {firebaseStore} from "../../../config/fbConfig";

const { TabPane } = Tabs;

export default function ClientSchedule() {
  const currentUser = useSelector((state) => state.signIn.currentUser);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadingAppointment = [];
    firebaseStore
        .collection("appointments")
        .where("customerId", "==", currentUser.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs.forEach((doc) => {
            loadingAppointment.push(doc.data());
          });
          return loadingAppointment;
        }).then((data)=> {
      setAppointments(data);
    });
  });

  return (
    <div className="clientSchedule">
      <div className="yourAppointments">Your Appointments</div>
      <Tabs className="clientScheduleTabs" defaultActiveKey="1">
        <TabPane className="upcomingTab" tab="Upcoming" key="1">
          <Row className="clientScheduleViewRow">
            {appointments.map((appointment)=> (
                <ScheduleCard
                    name={appointment.designerName}
                    date={appointment.date}
                    time={appointment.time}
                    types={["cut", "perm"]}
                />
            ))}
          </Row>
        </TabPane>
        <TabPane className="pendingTab" tab="Pending" key="2">
          <Row className="clientScheduleViewRow"></Row>
        </TabPane>
        <TabPane className="historyTab" tab="History" key="3">
          <Row className="clientScheduleViewRow">
            <ScheduleCardHistory
              name="Jane"
              date="Aug 12"
              timeStart="2:00"
              timeEnd="3:00"
              types={["cut", "perm"]}
            />
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
}
