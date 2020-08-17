import React from "react";
import { Rate } from "antd";

export default function ReadOnlyStar(props) {
    const { rate } = props;
    
    return (
        <Rate disabled allowHalf defaultValue={rate}/>
    );
}