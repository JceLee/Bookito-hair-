import React from "react";
import DesignerCardBottom from "./DesignerCardBottom";
import DesignerCardTop from "./designerCardTop/DesignerCardTop";

export default function DesignerCardComponent(props) {
  const { designer } = props;
  return (
    <div className="designerCardComponent">
      <DesignerCardTop fname={designer.fname} rating={designer.rating} types={designer.types} walk={designer.walk} drive={designer.drive}/>
      <DesignerCardBottom workImgs={designer.workImgs}/>
    </div>
  );
}
