import React from "react";
import { Rate } from "antd";

export default function ReadOnlyStar(props) {
    const { rating } = props;
    return (
        <Rate disabled allowHalf defaultValue={rating}/>
    );
}