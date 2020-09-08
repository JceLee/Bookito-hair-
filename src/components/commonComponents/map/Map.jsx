import React, { useState, useEffect} from "react";
import GoogleMapReact from 'google-map-react';
import { geocode } from "../../../helpers/geocode";
import Marker from './Marker.jsx';
// import { designerType } from '../../constants/designerType.js';
import "../../../assets/scss/commonComponents/map/Map.scss";

export default function Map(props) {
    const {
        initialLocationString,
        designers,
    } = props;

    const [defaultCenter, setDefaultCenter] = useState({lat: 49.2377817, lng: -123.0410276 });
    const [userLocation, setUserLocation] = useState();

    const HomeMarker = userLocation && <Marker
        lat={userLocation.lat}
        lng={userLocation.lng}
        key={`map-marker-home`}
    />
    const DesignerMarkers = designers && designers.map(designer => (
        <Marker 
            lat = {designer.location.lat}
            lng = {designer.location.lng}
            designer={designer}
            key = {`map-marker-${designer.id}`}
        />
    ))

    useEffect(() => {
        geocode(initialLocationString).then(latLng => {
            if (latLng) {
                setUserLocation(latLng);
                console.log("latLng:", latLng);
            } else {
                setUserLocation(defaultCenter);
                console.log("geocode failed!");
            }
        });
    }, [defaultCenter, initialLocationString, props.designers]);

    return (
        <div style={{ height: "91.2vh", width: "100%", zIndex: 10 }}>
            <GoogleMapReact
                className="mapComponent"
                bootstrapURLKeys={{ key: "AIzaSyDUz5tzN9Fm76pLUherzsDE-jG0LKBEhIc" }}
                // center={location}
                defaultCenter={defaultCenter}
                defaultZoom={15}
                options={{ /*gestureHandling: "greedy",*/ scrollwheel: false }}
            >
                {HomeMarker}
                {DesignerMarkers}
            </GoogleMapReact>
        </div>
    );
}
