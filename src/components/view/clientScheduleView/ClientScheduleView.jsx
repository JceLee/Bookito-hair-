import React from "react";
import ScheduleCardHistory from "../../commonComponents/ScheduleCardHistory";

export default function ClientSchedule() {
  return <div>Client Schedule Page
      <ScheduleCardHistory types={["perm", "cut"]} />
  </div>;
}
