import React from 'react';
import '../assets/css/Appointment.css';
import SliderView from './SliderView';

export default function Appointments() {
  return (
    <div className='flex-container'>
      <div className='items upcomingAppointment'>Upcoming Appointment</div>
      <div className='items waitingList'>Waiting List</div>
      <div className='items History'>History Calendar</div>
      <div className='items History'>History Schedule box</div>
      <div className='items Designers'>
        Favorite Designers
        <SliderView />
      </div>
    </div>
  );
}
