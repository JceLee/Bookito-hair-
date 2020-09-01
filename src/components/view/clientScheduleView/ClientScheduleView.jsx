import React from 'react';
import { Tabs, Row } from 'antd';
import ScheduleCard from '../../commonComponents/ScheduleCard';
import ScheduleCardHistory from '../../commonComponents/ScheduleCardHistory';

const { TabPane } = Tabs;

export default function ClientSchedule() {
  return (
    <div className='clientSchedule'>
      <div className='yourAppointments'>Your Appointments</div>
      <Tabs className='clientScheduleTabs' defaultActiveKey='1'>
        <TabPane className='upcomingTab' tab='Upcoming' key='1'>
          <Row className='clientScheduleViewRow'>
            <ScheduleCard
              name='Jane'
              date='Aug 12'
              timeStart='2:00'
              timeEnd='3:00'
              types={['cut', 'perm']}
            />
          </Row>
        </TabPane>
        <TabPane className='pendingTab' tab='Pending' key='2'>
          <Row className='clientScheduleViewRow'></Row>
        </TabPane>
        <TabPane className='historyTab' tab='History' key='3'>
          <Row className='clientScheduleViewRow'>
            <ScheduleCardHistory
              name='Jane'
              date='Aug 12'
              timeStart='2:00'
              timeEnd='3:00'
              types={['cut', 'perm']}
            />
          </Row>
        </TabPane>
      </Tabs>
    </div>
  );
}
