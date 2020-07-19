import React, { useCallback } from "react";
import {useDispatch, useSelector} from "react-redux";
import { loadFirebaseDB } from "../actions/firebase"
import * as fdb from "../config/fbConfig";

export default function Listing(props) {

    //load data
    const dispatch = useDispatch();
    const loadDataBase = useCallback(
        (value) => dispatch(loadFirebaseDB(value)),
        [dispatch]
    );
    console.log(fdb.getDesignerList());
    loadDataBase(fdb.getDesignerList());


    //display data

    const {
        firebaseDB
    } = useSelector((state) => ({
        firebaseDB: state.firebase.firebaseDB
    }));

    return (
        <div>
            Test Number from redux:
        </div>
    );
}
