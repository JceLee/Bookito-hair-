import React from "react";
import { Card, Col } from "antd";

export default function InfoCard(props) {
  const { Meta } = Card;
  const { header, context, src } = props;
  return (
    <Card
      className="infoCard"
      hoverable
      cover={<img alt="example" src={src} />}
    >
      <Meta title={header} description={context} />
    </Card>
  );
}
