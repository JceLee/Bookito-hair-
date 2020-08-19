import { combineReducers } from "redux";
import firestore from "./firestore"
import signIn from "./signIn";

export default combineReducers({
    firestore: firestore,
    user: signIn,
});

