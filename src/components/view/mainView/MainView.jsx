import React, {useState} from "react";
import SearchBarSection from "./SearchBarSection";
import NewDesignersDesktopSection from "./NewDesignersDesktopSection";
import JoinUs from "./JoinUs";
import BookitoFooter from "../../commonComponents/BookitoFooter";

export default function MainView() {

  return (
    <>
      <SearchBarSection/>
      <JoinUs/>
      <NewDesignersDesktopSection/>
      <div className="newDesignerMobileSection"/>
      <BookitoFooter/>
    </>
  )
}
