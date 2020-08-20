import React from "react";
import ScheduleCardRequest from "../../../commonComponents/ScheduleCardRequest";
import { CloseOutlined } from "@ant-design/icons";

export default function NewRequests(props) {
  const { newRequests, onClick } = props;

  return (
    <div className="newRequestDiv">
      <CloseOutlined onClick={onClick} />
      {newRequests.map((request, index) => (
        <ScheduleCardRequest key={index} newRequest={request} />
      ))}
    </div>
  );
}
