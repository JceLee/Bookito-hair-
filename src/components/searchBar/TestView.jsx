import React, { useState, useEffect } from "react";
import queryString from "query-string"

export default function TestView(props) {
    useEffect(() => {
        const params = queryString.parse(props.location.search);
        console.log("params:", params);
    });

    return (
        <div>
            TestView - open console log to check param values
        </div>
    );
}
