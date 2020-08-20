import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentTooltip,
  ViewSwitcher,
  Toolbar,
  DateNavigator,
  TodayButton,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";
import TooltipContent from "./TooltipContent";
import AddIcon from "@material-ui/icons/Add";
import { Badge } from "antd";

export default function Calendar(props) {
  const [newRequestState, setNewRequestState] = useState(false);
  //   const currentDate = "2018-11-01";
  const currentDate = new Date();

  const designer = {
    notifications: 3,
  };

  const appointments = [
    {
      startDate: "2020-08-19T09:45",
      endDate: "2020-08-19T11:00",
      title: "John Doe",
      style: "Men's Cut",
      phoneNumber: "7781231234",
    },
  ];

  const newRequests = () => {
    setNewRequestState(!newRequestState);
  };

  const customToolbar = () => {
    return (
      <Toolbar.FlexibleSpace className="flexibleSpace">
        <div className="flexContainer">
          <Badge className="newRequestBadge" count={designer.notifications}>
            <button className="newRequestBtn" onClick={newRequests}>
              NEW REQUESTS
            </button>
          </Badge>
        </div>
      </Toolbar.FlexibleSpace>
    );
  };

  const commitChanges = (added, changed, deleted) => {
    console.log("Save");
  };

  const layout = () => {
    return <div>temp</div>;
  };

  return (
    <div className="calendar">
      <Paper>
        <Scheduler data={appointments}>
          <ViewState defaultCurrentDate={currentDate} />
          <MonthView />
          <WeekView />
          <DayView startDayHour={9} endDayHour={14} />
          <Toolbar flexibleSpaceComponent={customToolbar} />
          <TodayButton className="todayBtn" />
          <DateNavigator />
          <ViewSwitcher />
          <Appointments />
          <EditingState onCommitChanges={commitChanges} />
          <AppointmentTooltip
            showOpenButton
            showCloseButton
            showDeleteButton
            contentComponent={TooltipContent}
          />
          <AppointmentForm layoutComponent={layout} />
          <Fab
            color="secondary"
            className="addButton"
            // onClick={() => {
            //   this.setState({ editingFormVisible: true });
            //   this.onEditingAppointmentChange(undefined);
            //   this.onAddedAppointmentChange({
            //     startDate: new Date(currentDate).setHours(startDayHour),
            //     endDate: new Date(currentDate).setHours(startDayHour + 1),
            //   });
            // }}
          >
            <AddIcon />
          </Fab>
        </Scheduler>
      </Paper>
      {newRequestState ? <div>new request true</div> : null}
    </div>
  );
}
