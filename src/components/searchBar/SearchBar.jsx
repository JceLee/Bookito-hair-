import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import DesignerTypeCarousel from "./DesignerTypeCarousel";
import LocationInput from "./LocationInput";
import "../../assets/scss/searchBar/SearchBar.scss";

export default function SearchBar() {
    const [designerType, setDesignerType] = useState();

    useEffect(() => {

    });

    const history = useHistory();
    const handleSearch = location => {
        const route = `/testView?type=${designerType}${location?`&location=${location}`:""}`;
        history.push(route);
    };

    return (
        <div className="searchBar">
            <h3 className="searchBarText">LookUp your new favorite</h3>
            <DesignerTypeCarousel setDesignerType={setDesignerType} />
            <h3 className="searchBarText">near by</h3>
            <LocationInput handleSearch={handleSearch} />
        </div>
    );
}
