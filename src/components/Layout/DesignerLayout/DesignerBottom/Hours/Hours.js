import React, { Fragment } from 'react';

import classes from './Hours.module.css';

const Hours = (props) => {
  return (
    <Fragment>
      <div className={classes.Hours}>
        <h2>Hours</h2>
        <table>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>10:00 am - 9:00 pm</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>10:00 am - 9:00 pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>10:00 am - 9:00 pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>10:00 am - 9:00 pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>10:00 am - 9:00 pm</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Hours;
