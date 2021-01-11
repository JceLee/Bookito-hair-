import React from "react";
import DesignerCardBottom from "./DesignerCardBottom";
import DesignerCardTop from "./designerCardTop/DesignerCardTop";
import { Divider } from "antd";

export default function DesignerCardComponent(props) {
  const { designer, mapVisibleDesktop } = props;

  return (
    <div
      className="designerCardComponent"
    >
      <DesignerCardTop
        fname={designer.fname}
        distance={designer.distance}
        rateScore={designer?.rate?.average || 0}
        rateCount={designer?.rate?.count || 0}
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
