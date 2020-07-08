import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { testActionStorePayload } from "../actions"

export default function TestCounter(props) {
    let increment_value = 1;
    const dispatch = useDispatch();
    const incrementStoreValue = useCallback(
        (value) => dispatch(testActionStorePayload(value)),
        [dispatch]
    );
    const clickEvent = () => {
        console.log(`increment value: ${increment_value}`);
        incrementStoreValue(increment_value++);
    };

    return (
        <div style = {{backgroundColor: "blue"}}>
            <button onClick={clickEvent}>
                increment
            </button>
        </div>
    );
}
