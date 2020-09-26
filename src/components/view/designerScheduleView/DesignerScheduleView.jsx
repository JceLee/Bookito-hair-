import React from "react";
import Calendar from "./calendar/Calendar";

export default function DesignerSchedule() {
  const newRequests = [
    {
      clientName: "Gina",
      date: "Aug 12",
      timeStart: "2:00",
      timeEnd: "3:00",
      types: ["cut", "perm"],
    },
    {
      clientName: "Jess",
      date: "Aug 12",
      timeStart: "2:00",
      timeEnd: "3:00",
      types: ["cut", "perm"],
    },
  ];

  const appointmentArray = [
    {
      title: "Gina Kim",
      startDate: "2020-09-03T09:45",
      endDate: "2020-09-03T11:00",
      serviceName: "Men Haircut",
      price: 50,
      phoneNumber: "7781231234",
    },
    {
      title: "Gina Kim",
      startDate: "2020-09-02T09:45",
      endDate: "2020-09-02T11:00",
      serviceName: "Men Haircut",
      price: 50,
      phoneNumber: "7781231234",
    },
    {
      title: "Gina Kim",
      startDate: "2020-09-09T09:45",
      endDate: "2020-09-09T11:00",
      serviceName: "Men Haircut",
      price: 50,
      phoneNumber: "7781231234",
    },
    {
      title: "Gina Kim",
      startDate: "2020-09-16T09:45",
      endDate: "2020-09-16T11:00",
      serviceName: "Men Haircut",
      price: 50,
      phoneNumber: "7781231234",
    },
    {
      title: "Gina Kim",
      startDate: "2020-09-2309:45",
      endDate: "2020-09-23T11:00",
      serviceName: "Men Haircut",
      price: 50,
      phoneNumber: "7781231234",
    },
    {
      title: "Gina Kim",
      startDate: "2020-09-30T09:45",
      endDate: "2020-09-30T11:00",
      serviceName: "Men Haircut",
      price: 50,
      phoneNumber: "7781231234",
    },
    {
      title: "Gina Kim",
      startDate: "2020-09-01T09:45",
      endDate: "2020-09-01T11:00",
      serviceName: "Men Haircut",
      price: 50,
      phoneNumber: "7781231234",
    },
  ];

  return (
    <div className="designerScheduleView">
      <Calendar newRequests={newRequests} appointmentArray={appointmentArray} />
    </div>
  );
}
