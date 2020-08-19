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
    const [location, setLocation] = useState(defaultCenter);
    // const [designers, setDesigners] = useState(props.designers);
    const Markers = designers.map(designer => (
        <Marker 
          lat = {designer.latitude}
          lng = {designer.longitude}
          designer={designer}
          key = {designer.id}
        />
      ))

    useEffect(() => {
        // setDesigners(props.designers);
        geocode(initialLocationString).then(latLng => {
            if (latLng) {
                setLocation({
                    lat: latLng.lat,
                    lng: latLng.lng,
                });
                console.log("latLng:", latLng);
            } else {
                setLocation(defaultCenter);
                console.log("geocode failed!");
            }
        });
    }, [defaultCenter, initialLocationString, props.designers]);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDUz5tzN9Fm76pLUherzsDE-jG0LKBEhIc' }}
                // center={location}
                defaultCenter={defaultCenter}
                defaultZoom={15}
                options={{ /*gestureHandling: "greedy",*/ scrollwheel: false }}
            >
                <Marker
                    lat={location.lat}
                    lng={location.lng}
                    key={0}
                />
                <Marker
                    lat={location.lat-0.01}
                    lng={location.lng-0.01}
                    designer={designers[0]}
                    key={1}
                />
                <Marker
                    lat={location.lat+0.01}
                    lng={location.lng+0.01}
                    designer={designers[1]}
                    key={2}
                />

                {/* {Markers} */}
                {/* {designers && designers.map(designer =>
                    <Marker
                        lat={designer.location.lat}
                        lng={designer.location.lat}
                        name={designer.name}
                        key={Math.random()}
                    />
                )}; */}
            </GoogleMapReact>
        </div>
    );
}
