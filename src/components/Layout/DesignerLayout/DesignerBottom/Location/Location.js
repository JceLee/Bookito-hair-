import classes from './Location.module.css';

import React, { Fragment } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const Location = (props) => (
  <Fragment>
    <div className={classes.Location}>
      <h2>Location</h2>
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 49.2382399, lng: -123.1128754 }}
      />
    </div>
  </Fragment>
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC8CafSu5IPQErCTSwj0YpRPWQUeniuyg8',
})(Location);
