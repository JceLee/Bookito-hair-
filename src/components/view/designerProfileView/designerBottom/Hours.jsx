import React from "react";

const formatTime = (value) => {
  value = value > 1439 ? 1439 : value;
  let hours = Math.floor(value / 60);
  let minutes = value - hours * 60;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (minutes === 0) minutes = "00";
  return `${hours}:${minutes}`;
};

const displayTime = (value) => {
  const [startTime, endTime] = value;
  const convertedStartTime = startTime * 30;
  const convertedEndTime = endTime * 30;
  const from = formatTime(convertedStartTime);
  const to = formatTime(convertedEndTime);
  const whitespace = " - ";
  return [from, whitespace, to];
};

const Hours = (props) => {
  const { id, hours } = props;
  return (
    <div className="hours" id={id}>
      <h2>Hours</h2>
      <table>
        <tbody>
          {Object.keys(hours).map((day, index) => {
            return (
              <tr key={index}>
                <td>{day}</td>
                {hours[day][0].closed ? (
                  <td>Closed</td>
                ) : (
                  <td>{displayTime(hours[day][0].tradingHours)}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Hours;
