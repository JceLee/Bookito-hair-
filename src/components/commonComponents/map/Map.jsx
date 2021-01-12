import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from './Marker.jsx';

export default function Map(props) {
    const {
        isDesktop,
        userLocation,
        designers,
        style,
    } = props;

    const HomeMarker = userLocation && <Marker
        key={`map-marker-home`}
        lat={userLocation.lat}
        lng={userLocation.lng}
    />

    const DesignerMarkers = designers && designers.map(designer => (
        designer.latLng && <Marker
            isDesktop={isDesktop}
            key={`map-marker-${designer.uid}`}
            lat={designer.latLng.lat}
            lng={designer.latLng.lng}
            userLocation={userLocation}
            designer={designer}
        />
    ));

    return (
        <>
            {userLocation && <div className="mapComponent" style={style}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDUz5tzN9Fm76pLUherzsDE-jG0LKBEhIc" }} // TODO: extract!
                    center={userLocation}
                    defaultCenter={userLocation}
                    defaultZoom={15}
                    options={{ gestureHandling: "greedy", scrollwheel: true }} // Controls how the map can be navigated
                >
                    {HomeMarker}
                    {DesignerMarkers}
                </GoogleMapReact>
            </div>}
        </>
    );
}
