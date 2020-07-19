import React from "react";
import {useSelector} from "react-redux";

export default function Home() {
    const {
        firebaseDB
    } = useSelector((state) => ({
        firebaseDB: state.firebase.firebaseDB
    }));

    console.log(firebaseDB);

    return (
        <div>
            Home
        </div>
    );
}
