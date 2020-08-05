import React from "react";
import { Card } from "antd";

export default function InfoCard(props) {
  const { Meta } = Card;
  const { header, context } = props;
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://images.unsplash.com/photo-1596180737956-00cb917e382b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      }
    >
      <Meta title={header} description={context} />
    </Card>
  );
}
