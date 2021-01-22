import React from "react";
import { Row, Col, Avatar } from "antd";
import { StarRead } from "../../../../commonComponents/StarRate";

export default function DesignerCardTopLeft(props) {
  const { rateScore, rateCount, fname, profile } = props; // TODO: add rateCount

  return (
    <Row className="designerCardTopLeft">
      <Col>
        <Avatar size={64} src={profile} />
      </Col>
      <Col className="topLeftSecondCol">
        <div>{fname}</div>
        <div className="topLeftSecondColRating">
          {/* TODO: add rateCount */}
          <StarRead rateScore={rateScore || 0} rateCount={rateCount || 0} />
        </div>
      </Col>
    </Row>
  );
}
