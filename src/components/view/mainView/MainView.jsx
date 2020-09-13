import React from "react";
import SearchBarSection from "./SearchBarSection";
import InfoCard from "./InfoCard";
import NewDesignersDesktopSection from "./NewDesignersDesktopSection";
import NewDesignerCarousel from "./NewDesignerCarousel";

export default function MainView() {
  const newDesignerImages = [
    "https://i.pinimg.com/474x/60/87/58/608758f6be3e3e3200cc0fc13b6bb4e4.jpg",
    "https://i.pinimg.com/474x/d7/1a/ee/d71aee9cbedb8a37754d64b531fcec28.jpg",
    "https://i.pinimg.com/474x/1c/53/3d/1c533dd48de3268335e4cf9937064ffa.jpg",
    "https://i.pinimg.com/474x/7e/dd/a5/7edda5894b55e9ac97bab155ee9a6a81.jpg",
    "https://i.pinimg.com/474x/2d/d4/fd/2dd4fd029832eba729a518b90f0b0d9b.jpg",
    "https://i.pinimg.com/474x/95/65/ba/9565baa039b100f2e5921a7786ce5b38.jpg",
    "https://i.pinimg.com/474x/42/65/1c/42651cb45931a16714948ff1610da3b6.jpg",
    "https://i.pinimg.com/474x/3b/78/db/3b78db4f25a7f3ba5d89c2575a41339f.jpg",
  ];
  return (
    <>
      <SearchBarSection />
      <div align="middle" className="infoCardsSection">
        <InfoCard
          header="Become our partner!"
          context="blabalablabalb"
          src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1373&q=80"
        />
        <InfoCard
          header="Q & A"
          context="BLABLABLABVLALBA"
          src="https://cdn.pixabay.com/photo/2016/10/20/18/36/search-1756278_960_720.jpg"
        />
      </div>

      <NewDesignersDesktopSection newDesignerImages={newDesignerImages} />

      <div className="newDesignerMobileSection"></div>
    </>
  );
}
