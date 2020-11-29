import React, { useState } from "react";
import { Dialog, TextField } from "@material-ui/core";
import { CloseOutlined } from "@ant-design/icons";
import BlackBtn from "../../../commonComponents/BlackBtn";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";

export default function AddAppointmentModal(props) {
  const { addAppointmentModalState, displayAddAppointmentModal } = props;
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedTime, setSelectedTime] = useState(date.getHours() + ":" + date.getMinutes());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Dialog
      className="addAppointmentModal"
      open={addAppointmentModalState}
      onClose={displayAddAppointmentModal}
    >
      <div className="modalHeader">
        <div className="headerTitleCol">Add</div>
        <div className="headerDeleteCol">
          <CloseOutlined onClick={displayAddAppointmentModal} />
        </div>
      </div>
      <form className="form">
        <TextField
          className="outlined-margin-normal"
          label="Client Name"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        <TextField
          className="outlined-margin-normal"
          label="Client Phone Number"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            fullWidth
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
            fullWidth
          />
        </MuiPickersUtilsProvider>
        {/* <TextField
          margin="normal"
          label="Select Time"
          type="time"
          defaultValue={selectedTime}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          fullWidth
        /> */}
        {/* div for extra margin */}
        <div className="extraMargin">
          <BlackBtn btnName="Submit" />
        </div>
      </form>
    </Dialog>
  );
}
