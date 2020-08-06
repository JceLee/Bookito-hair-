import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import DesignerTypeCarousel from "./DesignerTypeCarousel";
import SearchBar from "../../commonComponents/SearchBar";

export default function SearchBarSection() {
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
    <div className="searchBarSection">
      <div className="frontText">
        <b>LookUp</b> your new favorite
      </div>
      <DesignerTypeCarousel setDesignerType={setDesignerType} />
      <div className="rearText">near by</div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
}
