import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {load_database} from "../../../actions/firebaseAction";
import {firebaseDB} from "../../../config/fbConfig";

async function loadDatabase() {
  const designers = [];
  await firebaseDB.collection('designers').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          designers.push(doc.data());
        });
      });
  return designers;
};

export default function DesignerListView() {
  const designers = useSelector(state => state.firebase.designers);
  const dispatch = useDispatch();
  const database = loadDatabase();
  dispatch(load_database(database));
  console.log(designers);
  return <div>Designer List Page</div>;
}
