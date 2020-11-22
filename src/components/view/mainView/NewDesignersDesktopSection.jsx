import React from "react";
import { Card } from "antd";

export default function NewDesignersDesktopSection(props) {
  const { newDesignerImages } = props;
  const firstHalfNewDesigners = newDesignerImages.slice(0, 4);
  const secondHalfNewDesigners = newDesignerImages.slice(4, 8);

  return (
    <div className="newDesignsersDesktopSection">
      <div className="headerSection">
        <div className="topLine">Designers' Works</div>
        <div className="bottomLine">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      {/* <div className="newDesignersHeaderSmallDesktopSection">New Designers</div> */}
      <div className="imagesSection">
        <div className="designerImagesRow">
          {firstHalfNewDesigners.map((image, inx) => {
            return (
              <Card key={inx} className="newDesignerCard" hoverable>
                <img
                  src={image}
                  alt="New Designers"
                  className="designerImage"
                />
              </Card>
            );
          })}
        </div>
        <div className="designerImagesRow">
          {secondHalfNewDesigners.map((image, inx) => {
            return (
              <Card key={inx} className="newDesignerCard" hoverable>
                <img
                  src={image}
                  alt="New Designers"
                  className="designerImage"
                />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
