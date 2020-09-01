import React from "react";
import DesignerCardBottom from "./DesignerCardBottom";
import DesignerCardTop from "./designerCardTop/DesignerCardTop";
import { useHistory } from "react-router-dom";

export default function DesignerCardComponent(props) {
  const { designer } = props;

  const history = useHistory();
  const handleSearch = (location) => {
    const route = `/designer_profile?uid=${designer.uid}`;
    history.push(route);
  };

  return (
    <div className="designerCardComponent" onClick={handleSearch}>
      <DesignerCardTop
        fname={designer.fname}
        rate={designer.rate}
        services={designer.services}
        profile={designer.profile}
      />
      <DesignerCardBottom works={designer.works} />
    </div>
  );
}
