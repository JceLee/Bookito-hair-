import React, { useCallback } from "react";
import {useDispatch, useSelector} from "react-redux";
import { loadFirebaseDB } from "../actions/firebase"
import * as fdb from "../config/fbConfig";

export default function Listing(props) {

    const dispatch = useDispatch();
    const loadDataBase = useCallback(
        (value) => dispatch(loadFirebaseDB(value)),
        [dispatch]
    );

    //load data
    const db = fdb.getDesignerList().collection("designers").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    });

    const clickEvent = () => {
        loadDataBase(db);
    };


    //display data

    const {
        firebaseDB
    } = useSelector((state) => ({
        firebaseDB: state.firebase.firebaseDB
    }));


    return (
        <div>
            <button onClick={clickEvent}>
                Load DB
            </button>
        </div>
    );
}
