import React, { useState } from "react";
import Map from "../../../commonComponents/map/Map";

export default function Location(props) {
  const { id, designer } = props;
  const [position, setPosition] = useState(designer.latLng);

  return (
    <div className="location" id={id}>
      <h2 id="locationTitle">Location</h2>
      <div className="googleMap">
        <Map
          isDesktop={window.innerWidth >= 1200}
          userLocation={position} // TODO: this should be user location, not designer location
          designers={[designer]}
          style={{height: "40vh"}}
        />
      </div>
    </div>
  );
}
