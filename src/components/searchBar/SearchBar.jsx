import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import QueryString from "query-string"
import DesignerTypeCarousel from "./DesignerTypeCarousel";
import LocationInput from "./LocationInput";
import "../../assets/css/searchBar/SearchBar.css";

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
            <DesignerTypeCarousel setDesignerType={setDesignerType} />
            <LocationInput handleSearch={handleSearch} />
        </div>
    );
}
