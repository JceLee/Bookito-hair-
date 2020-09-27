import React from "react";
import { Row, Col, Avatar } from "antd";
import ReadOnlyStar from "../../../../commonComponents/ReadOnlyStar";
import { UserOutlined } from "@ant-design/icons";
import { StarRate, StarRead } from "../../../../commonComponents/StarRate";

export default function DesignerCardTopLeft(props) {
  const { rate, fname, profile } = props;

  return (
    <Row className="designerCardTopLeft">
      <Col>
        <Avatar size={64} src={profile} />
      </Col>
      <Col className="topLeftSecondCol">
        <div>{fname}</div>
        <div className="topLeftSecondColRating">
          <StarRead rateScore={5} rateCount={12}/>
          {/* <StarRate onRate={console.log("do something on rate")} /> */}
        </div>
      </Col>
    </Row>
  );
}
