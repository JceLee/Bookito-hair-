import React from "react";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function ClientSchedule() {

    return (
        <>
            <div className="yourAppointments">Your Appointments</div>
            <Tabs className="clientScheduleTabs" defaultActiveKey="1">
                <TabPane className="upcomingTab" tab="Upcoming" key="1">
                    Upcoming
                </TabPane>
                <TabPane className="pendingTab" tab="Pending" key="2">
                    Pending
                </TabPane>
                <TabPane className="historyTab" tab="History" key="3">
                    History
                </TabPane>
            </Tabs>
        </>
    );
}
