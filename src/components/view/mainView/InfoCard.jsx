import React from "react";
import { Card } from "antd";

export default function InfoCard(props) {
  const { Meta } = Card;
  const { header, context, src } = props;
  return (
    <Card
      className="infoCard"
      hoverables
      cover={<img alt="example" src={src} />}
    >
      <Meta title={header} description={context} />
    </Card>
  );
}
