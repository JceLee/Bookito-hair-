import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AccessTime from "@material-ui/icons/AccessTime";
import FaceIcon from "@material-ui/icons/Face";
import LocalPhoneOutlinedIcon from "@material-ui/icons/LocalPhoneOutlined";
import AppointmentEditForm from "./AppointmentEditForm";
import Drawer from "@material-ui/core/Drawer";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";

export default function TooltipContent(props) {
  const { appointmentData, formatDate, onOpenButtonClick } = props;
  const [appointmentEdit, setAppointmentEdit] = useState(false);

  const displayForm = () => {
    setAppointmentEdit(!appointmentEdit);
  };

  return (
    <div className="tooltipContent">
      <Grid className="headerIcons">
        <Grid>
          <EditIcon className="tooltipHeaderIcon" onClick={displayForm} />
          <DeleteIcon className="tooltipHeaderIcon" />
          <CloseIcon
            className="tooltipHeaderIcon"
            onClick={onOpenButtonClick}
          />
        </Grid>
      </Grid>
      <Grid container alignItems="flex-start" className="contentContainer">
        <Grid item xs={2} className="textCenter">
          <FaceIcon className="icon" />
        </Grid>
        <Grid item xs={10}>
          <div>
            <div className="title dateAndTitle">{appointmentData.title}</div>
            <div className="text dateAndTitle">
              {formatDate(appointmentData.startDate, {
                day: "numeric",
                weekday: "long",
              })}
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems="center" className="contentContainer">
        <Grid item xs={2} className="textCenter">
          <AccessTime className="icon" />
        </Grid>
        <Grid item xs={10}>
          <div className="text">
            {`${formatDate(appointmentData.startDate, {
              hour: "numeric",
              minute: "numeric",
            })}
              - ${formatDate(appointmentData.endDate, {
                hour: "numeric",
                minute: "numeric",
              })}`}
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems="center" className="contentContainer">
        <Grid item xs={2} className="textCenter">
          <InfoOutlinedIcon className="icon" />
        </Grid>
        <Grid item xs={10}>
          <span className="text">{appointmentData.style}</span>
        </Grid>
      </Grid>
      <Grid container alignItems="center" className="contentContainer">
        <Grid item xs={2} className="textCenter">
          <LocalPhoneOutlinedIcon className="icon" />
        </Grid>
        <Grid item xs={10}>
          <span className="text">{appointmentData.phoneNumber}</span>
        </Grid>
      </Grid>
      <Drawer anchor="left" open={appointmentEdit} onClose={displayForm}>
        <AppointmentEditForm appointmentData={appointmentData} />
      </Drawer>
    </div>
  );
}
