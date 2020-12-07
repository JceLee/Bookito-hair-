import React from "react";
import { Row, Col, Avatar, Tag } from "antd";
import { StarRead } from "../../../../commonComponents/StarRate";

export default function DesignerCardTop(props) {
  const { fname, rateScore, rateCount, services, profile } = props;
  return (
    <Row className="designerCardTop">
      <Col>
        <Avatar className="designerCardIcon" size={64} src={profile} />
      </Col>

      <Col className="designerCardTopRight">
        <Row>
          <Col><span className="designerCardName">{fname}</span></Col>
          <Col><StarRead rateScore={rateScore || 0} rateCount={rateCount || 0} /></Col>
        </Row>
        <Row>
          <p className="designerCardDistance">5km from you</p>
        </Row>
        <Row>
          <div className="designerCardServices">
            {services && Object.keys(services).map(serviceKey => (
              services[serviceKey] !== [] && 
              <Tag className="serviceTag" /*color="#332C1E"*/>{serviceKey}</Tag>
            ))}
          </div>
        </Row>
      </Col>
    </Row>
  );
}
