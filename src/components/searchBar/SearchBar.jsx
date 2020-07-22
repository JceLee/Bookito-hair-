import React from "react";
import { Input, AutoComplete } from "antd";
import { Route } from "react-router-dom"
import DesignerTypeCarousel from "./DesignerTypeCarousel"
import LocationInput from "./LocationInput"
import TestView from "./TestView"
import "../../assets/css/SearchBar.css";

// import "../assets/css/NavBar.css";

export default function SearchBar() {
    return (
        <div className="searchBar">
            <DesignerTypeCarousel />
            <LocationInput />
        </div>
    );
}
