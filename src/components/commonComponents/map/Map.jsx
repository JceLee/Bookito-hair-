import React, { useState, useEffect} from "react";
import GoogleMapReact from "google-map-react";
import { geocode } from "../../../helpers/geocode";
import Marker from './Marker.jsx';
// import { designerType } from '../../constants/designerType.js';
import "../../../assets/scss/commonComponents/map/Map.scss";

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
            key = {`map-marker-${designer.uid}`}
            lat = {defaultLocation.lat + (Math.random()-0.5) * 0.2}
            lng = {defaultLocation.lng + (Math.random()-0.5) * 0.1}
            userLocation = {userLocation}
            designer={designer}
        />
    ))

    useEffect(() => {
        geocode(initialLocationString).then(latLng => {
            if (latLng) {
                console.log(latLng);
                setUserLocation(latLng);
            } else {
                setUserLocation(defaultLocation);
                console.log("Unable to get user location.");
            }
        });
    }, [defaultLocation, initialLocationString, props.designers]);

    return (
        <>
        {userLocation && <div className="mapBaseDiv">
            <GoogleMapReact
                className="mapComponent"
                bootstrapURLKeys={{ key: "AIzaSyDUz5tzN9Fm76pLUherzsDE-jG0LKBEhIc" }}
                // center={location}
                defaultCenter={userLocation}
                defaultZoom={15}
                options={{ gestureHandling: "greedy", scrollwheel: true }}
            >
                {HomeMarker}
                {DesignerMarkers}
            </GoogleMapReact>
        </div>}
        </>
    );
}
