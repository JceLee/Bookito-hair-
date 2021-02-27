import React from "react";
import SearchBarSection from "./SearchBarSection";
import NewDesignersSection from "./NewDesignersSection";
import JoinUsSection from "./JoinUsSection";
import BookitoFooter from "../../commonComponents/BookitoFooter";

export default function MainView() {
  return (
    <>
      <SearchBarSection />
      <NewDesignersSection />
      <JoinUsSection />
      <BookitoFooter />
    </>
  );
}
