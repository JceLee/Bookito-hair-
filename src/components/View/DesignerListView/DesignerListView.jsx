import React, {useCallback} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {load_database} from "../../../actions/firebaseAction";
import {firebaseDB} from "../../../config/fbConfig";


export default function DesignerListView() {
    const designers = useSelector(state => state.firestore.designers);
    const dispatch = useDispatch();
    const newDesigners = [];
    firebaseDB.collection('designers').get()
        .then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                newDesigners.push(doc.data());
            });
        });
    dispatch(load_database(newDesigners));
    return <div>Designer List Page</div>;
}
