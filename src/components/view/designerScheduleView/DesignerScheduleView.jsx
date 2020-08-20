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

  return (
    <div className="designerScheduleView">
      <Calendar newRequests={newRequests} />
    </div>
  );
}
