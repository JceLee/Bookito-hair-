import React from "react";
import { Card } from "antd";

export default function NewDesignersSection(props) {
  const firstHalfNewDesigners = props.advList.slice(0, 4);
  const secondHalfNewDesigners = props.advList.slice(4, 8);

  console.log(props);

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
                <img src={image[1]} alt="New Designers" className="designerImage" />
              </Card>
            );
          })}
        </div>
        <div className="designerImagesRow">
          {secondHalfNewDesigners.map((image, inx) => {
            return (
              <Card key={inx} className="newDesignerCard" hoverable>
                <img src={image[1]} alt="New Designers" className="designerImage" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
