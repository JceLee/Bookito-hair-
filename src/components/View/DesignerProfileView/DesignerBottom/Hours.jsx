import React from 'react';

const Hours = (props) => {
  const hours = [
    { day: 'Monday', hour: '10:00 - 22:00' },
    { day: 'Tuesday', hour: '10:00 - 22:00' },
    { day: 'Wednesday', hour: 'Closed' },
    { day: 'Thursday', hour: '10:00 - 22:00' },
    { day: 'Friday', hour: '10:00 - 22:00' },
    { day: 'Saturday', hour: '10:00 - 22:00' },
    { day: 'Sunday', hour: 'Closed' },
  ];

  return (
    <div className='hours' id={props.id}>
      <h2>Hours</h2>
      <table>
        <tbody>
          {hours.map((dayAndHour, index) => {
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
