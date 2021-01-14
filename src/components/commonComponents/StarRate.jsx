import React from "react";
import {Rate} from "antd";
import {StarFilled} from "@ant-design/icons";

export function StarRate(props) {
  const {onRate} = props;

  return <Rate className="starRate" allowHalf allowClear={false} onChange={onRate}/>;
}

export function StarRead(props) {
  const {rateScore, rateCount} = props;

  return (
    <span className="starReadContainer">
      <StarFilled
        className="starReadStar"
        style={{fontSize: "14px", marginBottom: 0, marginTop: 3, color: "#ff7373"}}
      />
      <p className="starReadScore" style={{paddingLeft: 2, paddingRight: 2}}>
        {rateScore.toFixed(2)}
      </p>
      <p className="starReadCount">{`(${rateCount})`}</p>
    </span>
  );
}
