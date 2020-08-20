import React from "react";
import ScheduleCardRequest from "../../../commonComponents/ScheduleCardRequest";

export default function NewRequests(props) {
  const { newRequests } = props;

  return (
    <div className="newRequestDiv">
      {newRequests.map((request, index) => (
        <ScheduleCardRequest key={index} newRequest={request} />
      ))}
    </div>
  );
}
