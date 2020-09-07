import React from "react";
import { displayTime } from "../../../../helpers/timeFunctions";

export default function Hours(props) {
  const { id, hours } = props;
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="hours" id={id}>
      <h2>Hours</h2>
      <table>
        <tbody>
          {days.map((day) => {
            return (
              <tr key={day}>
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
}
