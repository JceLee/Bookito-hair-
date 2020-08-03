import React from "react";
import { Card } from "antd";

export default function InfoCard(props) {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}
