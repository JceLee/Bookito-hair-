import React from "react";
import Grid from "@material-ui/core/Grid";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AccessTime from "@material-ui/icons/AccessTime";
import FaceIcon from "@material-ui/icons/Face";
import LocalPhoneOutlinedIcon from "@material-ui/icons/LocalPhoneOutlined";

export default function TooltipContent(props) {
  const { appointmentData, formatDate } = props;
  const { date, time, serviceName, phoneNumber, userName } = appointmentData;

  return (
    <div className="tooltipContent">
      <Grid container alignItems="flex-start" className="contentContainer">
        <Grid item xs={2} className="textCenter">
          <FaceIcon className="icon" />
        </Grid>
        <Grid item xs={10}>
          <div>
            <div className="title dateAndTitle">{userName}</div>
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
          <span className="text">{serviceName}</span>
        </Grid>
      </Grid>
      <Grid container alignItems="center" className="contentContainer">
        <Grid item xs={2} className="textCenter">
          <LocalPhoneOutlinedIcon className="icon" />
        </Grid>
        <Grid item xs={10}>
          <span className="text">{phoneNumber}</span>
        </Grid>
      </Grid>
    </div>
  );
}
