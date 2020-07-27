import React, { useState, useEffect } from "react";

export default function TestView(props) {
    useEffect(() => {
        console.log("props.location:", props.location);
    });

    return (
        <div>
            TestView
        </div>
    );
}
