import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker.jsx";

export default function Location(props) {
  const { id, location, latLng } = props;
  const [position, setPosition] = useState(latLng);
  const [loading, setLoading] = useState(true);

  Geocode.setApiKey("AIzaSyDUz5tzN9Fm76pLUherzsDE-jG0LKBEhIc");
  Geocode.setLanguage("en");
  Geocode.enableDebug();
  useEffect(() => {
    Geocode.fromAddress(location).then(
      (response) => {
        setPosition(latLng);
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
    <div className="location" id={id}>
      <h2>Location</h2>
      <div className="googleMap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC8CafSu5IPQErCTSwj0YpRPWQUeniuyg8" }}
          defaultCenter={position}
          defaultZoom={15}
        >
          <Marker
            lat={position.lat}
            lng={position.lng}
            address={location.split(", ").slice(0, 1).join()}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
  return (
    <>
      {googleMap}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
