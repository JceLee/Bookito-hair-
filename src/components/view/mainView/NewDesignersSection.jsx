import React from "react";
import { Card } from "antd";

export default function NewDesignersSection() {
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

  const firstHalfNewDesigners = newDesignerImages.slice(0, 4);
  const secondHalfNewDesigners = newDesignerImages.slice(4, 8);

  return (
    <section className="newDesignersSection">
      <div className="headerSection">
        <div className="topLine">Book Now</div>
        <div className="bottomLine">
          Find Beauticians around your location and book them without call or visit in person. Check
          your beautician's work anywhere and anytime before booking.
        </div>
      </div>
      {/* <div className="newDesignersHeaderSmallDesktopSection">New Designers</div> */}
      <div className="imagesSection">
        <div className="designerImagesRow">
          {firstHalfNewDesigners.map((image, inx) => {
            return (
              <Card key={inx} className="newDesignerCard" hoverable>
                <img src={image} alt="New Designers" className="designerImage" />
              </Card>
            );
          })}
        </div>
        <div className="designerImagesRow">
          {secondHalfNewDesigners.map((image, inx) => {
            return (
              <Card key={inx} className="newDesignerCard" hoverable>
                <img src={image} alt="New Designers" className="designerImage" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
