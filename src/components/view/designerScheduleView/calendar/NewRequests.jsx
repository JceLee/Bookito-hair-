import React from "react";
import ScheduleCardRequest from "../../../commonComponents/ScheduleCardRequest";
import { CloseOutlined } from "@ant-design/icons";
import NoRequests from "./NoRequests";

export default function NewRequests(props) {
  const { newRequests, onClick, forceUpdate } = props;
  return (
    <div className="newRequestDiv">
      <div className="closeIconDiv">
        <CloseOutlined className="closeIcon" onClick={onClick} />
      </div>
      {newRequests.length === 0 ? (
        <NoRequests />
      ) : (
        newRequests.map((request, index) => (
          <ScheduleCardRequest
            key={index}
            newRequest={request}
            close={onClick}
            forceUpdate={forceUpdate}
          />
        ))
      )}
    </div>
  );
}
