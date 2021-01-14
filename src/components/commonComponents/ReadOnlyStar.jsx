import React from "react";
import { Rate } from "antd";

// DEPRECATED: Use StarRate.jsx
export default function ReadOnlyStar(props) {
  const { rate } = props;

  return <Rate disabled allowHalf defaultValue={rate} style={{color : "#ff7373"}}/>;
}
