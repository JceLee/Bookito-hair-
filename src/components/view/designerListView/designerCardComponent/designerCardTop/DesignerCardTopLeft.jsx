import React from "react";
import { Row, Col, Avatar } from "antd";
import ReadOnlyStar from "../../../../commonComponents/ReadOnlyStar";
import { UserOutlined } from "@ant-design/icons";

export default function DesignerCardTopLeft(props) {

    const { rate, fname, profile } = props;

    return (
        <Row className="designerCardTopLeft">
            <Col>
                <Avatar size={64} src={profile} />
            </Col>
            <Col className="topLeftSecondCol">
                <div>
                    {fname}
                </div>
                <div className="topLeftSecondColRating">
                    <ReadOnlyStar rate={rate} />
                </div>
            </Col>
        </Row>
    );
}