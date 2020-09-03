import React from "react";

export default function DesignerCardTopRight(props) {
  const { services } = props;

  return (
    <div className="designerCardTopRight">
      <div className="designerCardTopRightTypes">
        {Object.keys(services) &&
          Object.keys(services)
            .filter((service) => services[service].length > 0)
            .map((service) => {
              return (
                <span key={service} className="designerCardTopRightType">
                  {service}
                </span>
              );
            })}
      </div>
    </div>
  );
}