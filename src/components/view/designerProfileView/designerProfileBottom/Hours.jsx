import React from "react";
import { destructureTimeRange } from "../../../../helpers/timeFunctions";

export default function Hours(props) {
  const { id, hours } = props;
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="hours" id={id}>
      <h2 id="hour">Hours</h2>
      <table>
        <tbody>
          {days.map((day) => {
            const [startTime, endTime] = destructureTimeRange(
              hours[day][0].tradingHours
            );
            return (
              <tr key={day}>
                <td id="day">{day}</td>
                {hours[day][0].closed ? (
                  <td>Closed</td>
                ) : (
                  <td>
                    {startTime} - {endTime}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
