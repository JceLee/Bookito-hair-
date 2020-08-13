import React from "react";
import { Tabs } from 'antd';
import ScheduleCard from "../../commonComponents/ScheduleCard";
import ScheduleCardHistory from "../../commonComponents/ScheduleCardHistory";

const { TabPane } = Tabs;

export default function ClientSchedule() {

    return (
        <>
            <div className="yourAppointments">Your Appointments</div>
            <Tabs className="clientScheduleTabs" defaultActiveKey="1">
                <TabPane className="upcomingTab" tab="Upcoming" key="1">
                    <ScheduleCard name="Jane" date="Aug 12" timeStart="2:00" timeEnd="3:00" types={["cut", "perm"]}/>
                </TabPane>
                <TabPane className="pendingTab" tab="Pending" key="2">
                    <ScheduleCard name="John" date="Aug 12" timeStart="2:00" timeEnd="3:00" types={["cut", "perm"]}/>
                    <ScheduleCard name="Jin" date="Aug 12" timeStart="2:00" timeEnd="3:00" types={["cut", "perm"]}/>
                </TabPane>
                <TabPane className="historyTab" tab="History" key="3">
                    <ScheduleCardHistory name="Jane" date="Aug 12" timeStart="2:00" timeEnd="3:00" types={["cut", "perm"]}/>

                </TabPane>
            </Tabs>
        </>
    );
}
