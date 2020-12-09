import React, { useState, useEffect} from "react";
import GoogleMapReact from "google-map-react";
import Marker from './Marker.jsx';
import { geocode } from "../../../helpers/geocode";

export default function Map(props) {
    const {
        isDesktop,
        initialLocationString,
        designers,
    } = props;

    const [userLocation, setUserLocation] = useState();
    const [defaultLocation] = useState({lat: 49.2377817, lng: -123.0410276 });

    const HomeMarker = userLocation && <Marker
        key={`map-marker-home`}
        lat={userLocation.lat}
        lng={userLocation.lng}
    />

    const DesignerMarkers = designers && designers.map(designer => (
        <Marker
            isDesktop={isDesktop}
            key={`map-marker-${designer.uid}`}

            // TODO: DISABLE THIS CODE WHEN LATLNG IS SUPPORTED
            lat={defaultLocation.lat + (Math.random()-0.5) * 0.2} // TODO: random location for testing only!
            lng={defaultLocation.lng + (Math.random()-0.5) * 0.1}
            // TODO: ENABLE THIS CODE WHEN LATLNG IS SUPPORTED
            // lat={designer.latLng.lat}
            // lng={designer.latLng.lng}

            userLocation={userLocation}
            designer={designer}
        />
    ))

    useEffect(() => {
        geocode(initialLocationString).then(latLng => {
            if (latLng) {
                setUserLocation(latLng);
            } else {
                setUserLocation(defaultLocation);
                console.log("Unable to get location!");
            }
        });
    }, [defaultLocation, initialLocationString, props.designers]);

    return (
        <>
            {userLocation && <div className="mapComponent">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDUz5tzN9Fm76pLUherzsDE-jG0LKBEhIc" }} // TODO: extract!
                    // center={location}
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
