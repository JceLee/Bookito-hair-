import React from 'react';
import { Rate } from 'antd';

const RatingSymbol = (props) => {
  const { rate } = props;
  return <Rate allowHalf={true} disabled value={rate} />;
};

export default RatingSymbol;
