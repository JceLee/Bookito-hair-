import React from "react";
import TestCounter from "./components/TestCounter"
import TestButton from "./components/TestButton"

export default function App() {
    return (
        <div>
            <TestCounter message="hello world" />
            <TestButton />
        </div>
    );
}
