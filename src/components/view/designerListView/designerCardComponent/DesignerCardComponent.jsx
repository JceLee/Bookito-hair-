import React from "react";
import DesignerCardBottom from "./DesignerCardBottom";
import DesignerCardTop from "./designerCardTop/DesignerCardTop";
import { useHistory } from "react-router-dom";

export default function DesignerCardComponent(props) {
  const { designer, handleSearch } = props;

  return (
    <div className="designerCardComponent" onClick={handleSearch(designer)}>
      <DesignerCardTop
        fname={designer.fname}
        rate={designer.rate}
        services={designer.services}
        profile={designer.photoURL}
      />
      <DesignerCardBottom works={designer.works} />
    </div>
  );
}
