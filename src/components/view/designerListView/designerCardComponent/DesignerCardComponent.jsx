import React from "react";
import DesignerCardBottom from "./DesignerCardBottom";
import DesignerCardTop from "./designerCardTop/DesignerCardTop";
import { useHistory } from "react-router-dom";
import { Divider } from "antd";

export default function DesignerCardComponent(props) {
  const { designer, handleSearch, mapVisibleDesktop } = props;

  return (
    <div
      className="designerCardComponent"
      // onClick={() => handleSearch(designer)}
    >
      <DesignerCardTop
        fname={designer.fname}
        distance={designer.distance}
        rateScore={designer.rate && designer.rate.average}
        rateCount={designer.rate && designer.rate.count}
        services={designer.services}
        profile={designer.photoURL}
        uid={designer.uid}
      />
      {designer.works?.length > 0 && (
        <DesignerCardBottom
          works={designer.works}
          mapVisibleDesktop={mapVisibleDesktop}
          uid={designer.uid}
        />
      )}
      <Divider className="designerCardComponentDivider" />
    </div>
  );
}
