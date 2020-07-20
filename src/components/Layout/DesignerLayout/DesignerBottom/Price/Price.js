import React, { Fragment } from 'react';

import classes from './Price.module.css';

const Price = (props) => {
  return (
    <Fragment>
      <div className={classes.Price}>
        <h2>Price</h2>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Male Hair cut</td>
              <td>$30</td>
            </tr>
            <tr>
              <td>Female Hair Cut</td>
              <td>$40</td>
            </tr>
            <tr>
              <td>Perm</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Male Hair cut</td>
              <td>$30</td>
            </tr>
            <tr>
              <td>Female Hair Cut</td>
              <td>$40</td>
            </tr>
            <tr>
              <td>Perm</td>
              <td>$50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>{props.children}</div>
    </Fragment>
  );
};

export default Price;
