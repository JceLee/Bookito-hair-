import React from "react";
import SearchBar from "../../commonComponents/searchBar/SearchBar";
import NewDesignerCarousel from "./NewDesignerCarousel";
import InfoCard from "./InfoCard";
import Announcement from "./Announcement";

export default function MainView() {
  return (
    <>
      <div className="searchBarSection">
        <SearchBar />
      </div>
      <div className="announcementSection">
        <Announcement />
      </div>
      <div className="infoCardsSection">
        <InfoCard header="Become our partner!" context="blabalablabalb" />
        <InfoCard header="Q & A" context="BLABLABLABVLALBA" />
      </div>
      <NewDesignerCarousel />
    </>
  );
}
