import React, {useState} from "react"

export default function DesignerCardTopRight(props) {
    const { services } = props;
    services && services.map((service, index) => () => {
        Object.keys(service.object).map((key, i) => (
            key.map((e, index) => () => {
                Object.keys(e.object).map((a, i) => (
                    console.log(a)
                ))})))
    });

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