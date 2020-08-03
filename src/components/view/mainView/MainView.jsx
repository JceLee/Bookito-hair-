import React from "react";
import SearchBar from "../../commonComponents/searchBar/SearchBar";
import NewDesignerCarousel from "./NewDesignerCarousel";
import InfoCard from "./InfoCard";

export default function MainView() {
  return (
    <>
      <div className="searchBarSection">
        <SearchBar />
      </div>
      <div className="annoucementSection">annoucement space here</div>
      <div className="enjoyWithSection">
        <InfoCard />
        <InfoCard />
      </div>
      <NewDesignerCarousel />
    </>
  );
}
