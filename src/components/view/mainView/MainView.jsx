import React from "react";
import SearchBar from "../../commonComponents/searchBar/SearchBar";

export default function MainView() {
  return (
    <>
      <div className="searchBarSection">
        <SearchBar />
      </div>
      <div className="annoucementSection">annoucement space here</div>
      <div className="enjoyWithSection">enjoy with</div>
      <div className="newDesignersSection">new designers</div>
    </>
  );
}
