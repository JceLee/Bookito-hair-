import React, {useRef, useState} from "react";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { ViewState } from "@devexpress/dx-react-scheduler";
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
} from "@devexpress/dx-react-scheduler-material-ui";
import TooltipContent from "./TooltipContent";
import AddIcon from "@material-ui/icons/Add";
import { Badge } from "antd";
import NewRequests from "./NewRequests";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteAppointmentModal from "../calendar/DeleteAppointmentModal";
import AddAppointmentModal from "./AddAppointmentModal";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

export default function Calendar(props) {
  const currentDate = new Date();
  const { newRequests, appointmentArray, forceUpdate } = props;
  const [newRequestState, setNewRequestState] = useState(false);
  const [addAppointmentModalState, setAddAppointmentModal] = useState(false);
  const [deleteAppointmentModalState, setDeleteAppointmentModal] = useState(false);
  const appointmentID = useRef("");

  const displayNewRequests = () => {
    setNewRequestState(!newRequestState);
  };
  const displayAddAppointmentModal = () => {
    setAddAppointmentModal(!addAppointmentModalState);
  };
  const displayDeleteAppointmentModal = () => {
    setDeleteAppointmentModal(!deleteAppointmentModalState);
  };

  const designer = {
    notifications: newRequests.length,
    holidays: [0, 6], // 0 for sunday 6 for saturday
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

  const getTooltipContent = ({ appointmentData, formatDate, ...restProps }) => {
    return <TooltipContent appointmentData={appointmentData} formatDate={formatDate} />;
  };

  const getTooltipHeader = ({ appointmentData, ...restProps }) => {
    appointmentID.current = appointmentData.id;
    return (
      <AppointmentTooltip.Header {...restProps}>
        <IconButton onClick={() => displayDeleteAppointmentModal()}>
          <DeleteIcon />
        </IconButton>
      </AppointmentTooltip.Header>
    );
  };

  const TimeTableCellBase = ({ classes, ...restProps }) => {
    const { startDate } = restProps;
    const date = new Date(startDate);
    if (designer.holidays.includes(date.getDay())) {
      return <WeekView.TimeTableCell {...restProps} className={classes.weekendCell} />;
    }
    return <WeekView.TimeTableCell {...restProps} />;
  };

  const TimeTableCellBaseMonth = ({ classes, ...restProps }) => {
    const { startDate } = restProps;
    const date = new Date(startDate);
    if (designer.holidays.includes(date.getDay())) {
      return <MonthView.TimeTableCell {...restProps} className={classes.weekendCell} />;
    }
    return <MonthView.TimeTableCell {...restProps} />;
  };

  const grayCellStyle = (theme) => ({
    weekendCell: {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      color: fade(theme.palette.action.disabledBackground, 0.38),
      "&:hover": {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      },
      "&:focus": {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      },
    },
  });

  const grayWeekTimeTableCell = withStyles(grayCellStyle, {
    name: "TimeTableCell",
  })(TimeTableCellBase);
  const grayMonthTimeTableCell = withStyles(grayCellStyle, {
    name: "TimeTableCell",
  })(TimeTableCellBaseMonth);

  return (
    <>
      <div className="calendar">
        <Paper>
          <Scheduler data={appointmentArray}>
            <ViewState defaultCurrentDate={currentDate} />
            <MonthView timeTableCellComponent={grayMonthTimeTableCell} />
            <WeekView
              startDayHour={9}
              endDayHour={19}
              timeTableCellComponent={grayWeekTimeTableCell}
            />
            <DayView
              startDayHour={9}
              endDayHour={19}
              timeTableCellComponent={grayWeekTimeTableCell}
            />
            <Toolbar flexibleSpaceComponent={customToolbar} />
            <Drawer anchor="right" open={newRequestState} onClose={displayNewRequests}>
              <NewRequests
                newRequests={newRequests}
                onClick={displayNewRequests}
                forceUpdate={forceUpdate}
              />
            </Drawer>
            <TodayButton className="todayBtn" />
            <DateNavigator />
            <ViewSwitcher />
            <Appointments />
            <AppointmentTooltip
              headerComponent={getTooltipHeader}
              contentComponent={getTooltipContent}
              showCloseButton
            />{" "}
            <Fab color="secondary" className="addButton" onClick={displayAddAppointmentModal}>
              <AddIcon />
            </Fab>
          </Scheduler>
        </Paper>
        <DeleteAppointmentModal
          deleteAppointmentModalState={deleteAppointmentModalState}
          displayDeleteAppointmentModal={displayDeleteAppointmentModal}
          appointmentID = {appointmentID.current}
        />
        <AddAppointmentModal
          addAppointmentModalState={addAppointmentModalState}
          displayAddAppointmentModal={displayAddAppointmentModal}
        />
      </div>
    </>
  );
}
