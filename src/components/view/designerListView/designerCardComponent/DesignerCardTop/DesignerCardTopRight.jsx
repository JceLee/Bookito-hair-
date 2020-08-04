import React from "react";
import "../../../../../assets/scss/view/designerListView/DesignerCardComponent/DesignerCardComponent.scss";

export default function DesignerCardTopRight(props) {
    const { types, walk, drive } = props;
    return (
        <div className="designerCardTopRight">
            <div className="designerCardTopRightTypes">
                {types.map((type, index) => (
                        <span key={index} className="designerCardTopRightType">{type}</span>
                    ))}
            </div>
            <div className="designerCardTopRightMinutes">
                {walk} minute walk, {drive} minute drive from your location.
            </div>
        </div>
    );
}