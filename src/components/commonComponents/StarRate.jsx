import React from "react";
import { Rate } from "antd";
import { StarFilled } from '@ant-design/icons';

export function StarRate(props) {
  const {
    onRate,
  } = props;

  return <Rate className="starRate" allowClear={false} onChange={onRate}/>
}

export function StarRead(props) {
    const { 
      rateScore,
      rateCount,
    } = props;
 
    return (
        <span className="starReadContainer">
            <StarFilled className="starReadStar" />
            <p className="starReadScore">{rateScore.toFixed(2)}</p>
            <p className="starReadCount">{`(${rateCount})`}</p>
        </span>
    );
}
