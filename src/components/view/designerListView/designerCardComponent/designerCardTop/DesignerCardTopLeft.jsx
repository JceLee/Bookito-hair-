import React from "react";
import { Row, Col, Avatar } from "antd";
import ReadOnlyStar from "../../../../commonComponents/ReadOnlyStar";
import { UserOutlined } from "@ant-design/icons";

export default function DesignerCardTopLeft(props) {
    return (
        <Row className="designerCardTopLeft">
            <Col>
                <Avatar size={64} icon={<UserOutlined />} />
            </Col>
            <Col className="topLeftSecondCol">
                <div>
                    {props.fname}
                </div>
                <div className="topLeftSecondColRating">
                    <ReadOnlyStar rating={props.rating} />
                </div>
            </Col>
        </Row>
    );
}