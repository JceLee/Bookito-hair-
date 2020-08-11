import React from "react";
import { Row } from "antd";
import DesignerCardTopRight from "./DesignerCardTopRight";
import DesignerCardTopLeft from "./DesignerCardTopLeft";

export default function DesignerCardTop(props) {

    const { fname, rating, types, walk, drive } = props

    return (
        <Row className="designerCardTop">
            <DesignerCardTopLeft rating={rating} fname={fname} />
            <DesignerCardTopRight types={types} walk={walk} drive={drive} />
        </Row>
    );
}