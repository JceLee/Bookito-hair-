import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Avatar, Tag } from "antd";
import { StarRead } from "../../../../commonComponents/StarRate";

export default function DesignerCardTop(props) {
  const { fname, rateScore, rateCount, distance, services, profile, uid } = props;
  return (
    <Row className="designerCardTop">
      <Col>
        <Link to={`/designer_profile?uid=${uid}`}>
          <Avatar className="designerCardIcon" size={64} src={profile} />
        </Link>
      </Col>

      <Col className="designerCardTopRight">
        <Row>
          <Link to={`/designer_profile?uid=${uid}`}>
            <Col><span className="designerCardName">{fname}</span></Col>
          </Link>
          <Col><StarRead rateScore={rateScore} rateCount={rateCount} /></Col>
        </Row>
        <Row>
          {distance && <p className="designerCardDistance">{`${distance}km from you`}</p>}
        </Row>
        <Row>
          <div className="designerCardServices">
            {services && Object.keys(services).map((serviceKey, i) => (
              services[serviceKey] !== [] && 
              <Tag key={`designerCardService${i}`} className="serviceTag" /*color="#332C1E"*/>{serviceKey}</Tag>
            ))}
          </div>
        </Row>
      </Col>
    </Row>
  );
}
