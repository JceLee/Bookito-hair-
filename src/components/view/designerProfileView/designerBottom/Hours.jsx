import React from 'react';

const Hours = (props) => {
  return (
    <div className='hours' id={props.id}>
      <h2>Hours</h2>
      <table>
        <tbody>
          {props.hours.map((dayAndHour, index) => {
            return (
              <tr key={index}>
                <td>{dayAndHour.day}</td>
                <td>{dayAndHour.hour}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Hours;
