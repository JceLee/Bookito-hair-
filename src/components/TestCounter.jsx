import React from "react";
import { useSelector } from "react-redux";

export default function TestCounter(props) {
    const {
        testNumber
    } = useSelector((state) => ({
        testNumber: state.test.testNumber
    }));

    return (
        <div style = {{backgroundColor: "red"}}>
            <p>
                Test Message from props: { props.message }
            </p>
            <p>
                Test Number from redux: { testNumber }
            </p>
        </div>
    );
}
