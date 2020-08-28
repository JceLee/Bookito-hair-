import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
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
import NewRequests from "./NewRequests";
import AppointmentEditForm from "./AppointmentEditForm";
import Grid from "@material-ui/core/Grid";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AccessTime from "@material-ui/icons/AccessTime";
import FaceIcon from "@material-ui/icons/Face";
import LocalPhoneOutlinedIcon from "@material-ui/icons/LocalPhoneOutlined";

export default function Calendar(props) {
  const { newRequests } = props;
  const [newRequestState, setNewRequestState] = useState(false);

  const [selectedAppointment, setSelectedAppointment] = useState();

  const currentDate = new Date();

  const designer = {
    notifications: 2,
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

  const displayNewRequests = () => {
    setNewRequestState(!newRequestState);
  };

  const customToolbar = () => {
    return (
      <Toolbar.FlexibleSpace className="flexibleSpace">
        <div className="flexContainer">
          <Badge className="newRequestBadge" count={designer.notifications}>
            <button className="newRequestBtn" onClick={displayNewRequests}>
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

  const layout = (props) => {
    console.log(props);
    return <AppointmentEditForm />;
  };

  // const Content = ({ children, appointmentData, classes, ...restProps }) =>
  const Content = ({ appointmentData, formatDate, onOpenButtonClick }) => {
    return (
      <TooltipContent
        appointmentData={appointmentData}
        formatDate={formatDate}
        onOpenButtonClick={onOpenButtonClick}
      />
    );
  };

  return (
    <>
      <div className="calendar">
        <Paper>
          <Scheduler data={appointments}>
            <ViewState defaultCurrentDate={currentDate} />
            <MonthView />
            <WeekView />
            <DayView startDayHour={9} endDayHour={14} />
            <Toolbar flexibleSpaceComponent={customToolbar} />
            <Drawer
              anchor="right"
              open={newRequestState}
              onClose={displayNewRequests}
            >
              <NewRequests
                newRequests={newRequests}
                onClick={displayNewRequests}
              />
            </Drawer>
            <TodayButton className="todayBtn" />
            <DateNavigator />
            <ViewSwitcher />
            <Appointments />
            <EditingState onCommitChanges={commitChanges} />
            <AppointmentTooltip contentComponent={Content} />
            {/* <AppointmentForm layoutComponent={AppointmentEditForm} /> */}
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
      </div>
    </>
  );
}
