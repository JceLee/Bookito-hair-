import { combineReducers } from "redux";
import firestore from "./firestore"

export default combineReducers({
    firestore: firestore,
});

