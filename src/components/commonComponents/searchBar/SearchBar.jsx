import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import DesignerTypeCarousel from "./DesignerTypeCarousel";
import LocationInput from "./LocationInput";
import "../../../assets/scss/commonComponents/searchBar/SearchBar.scss";

export default function SearchBar() {
  const [designerType, setDesignerType] = useState();

  useEffect(() => {});

  const history = useHistory();
  const handleSearch = (location) => {
    const route = `/designer_list?type=${designerType}${
      location ? `&location=${location}` : ""
    }`;
    history.push(route);
  };

  return (
    <div className="searchBar">
      <h4 className="searchBarText">LookUp your new favorite</h4>
      <DesignerTypeCarousel setDesignerType={setDesignerType} />
      <h4 className="searchBarText">near by</h4>
      <LocationInput handleSearch={handleSearch} />
    </div>
  );
}
