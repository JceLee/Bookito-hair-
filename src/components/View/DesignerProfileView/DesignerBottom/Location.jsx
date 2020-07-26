import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';

const Location = (props) => {
  const [position, setPosition] = useState({ lat: null, lng: null });
  const [loading, setLoading] = useState(true);

  Geocode.setApiKey('AIzaSyC8CafSu5IPQErCTSwj0YpRPWQUeniuyg8');
  Geocode.setLanguage('en');
  Geocode.enableDebug();
  useEffect(() => {
    Geocode.fromAddress(props.location).then(
      (response) => {
        setPosition(response.results[0].geometry.location);
        setLoading(false);
        return position;
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  if (loading) return null;

  let googleMap = (
    <div className='location' id={props.id}>
      <h2>Location</h2>
      <div className='googleMap'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC8CafSu5IPQErCTSwj0YpRPWQUeniuyg8' }}
          defaultCenter={position}
          defaultZoom={15}
        >
          <Marker
            lat={position.lat}
            lng={position.lng}
            address={props.location.split(', ').slice(0, 1).join()}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
  return <>{googleMap}</>;
};
export default Location;
