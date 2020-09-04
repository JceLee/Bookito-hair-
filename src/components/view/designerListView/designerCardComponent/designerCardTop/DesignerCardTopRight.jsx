import React, {useState} from "react"

export default function DesignerCardTopRight(props) {
    const { services } = props;

    return (
        <div className="designerCardTopRight">
            <div className="designerCardTopRightTypes">
                {/*{services && services.map((service, index) => (*/}
                {/*    <span key={index} className="designerCardTopRightType">{service}</span>*/}
                {/*))}*/}
                {/*{serviceList && serviceList.map((service, index) => (*/}
                {/*        <span key={index} className="designerCardTopRightType">{service}</span>*/}
                {/*    ))}*/}
            </div>
        </div>
    );
}