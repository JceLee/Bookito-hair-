import React from 'react';

const Hours = (props) => {
  const { id, hours } = props;
  return (
    <div className='hours' id={id}>
      <h2>Hours</h2>
      <table>
        <tbody>
          {hours.map((dayAndHour, index) => {
            const { day, hour } = dayAndHour;
            return (
              <tr key={index}>
                <td>{day}</td>
                <td>{hour}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Hours;
