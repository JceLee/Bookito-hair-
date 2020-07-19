import { combineReducers } from "redux";
import test from "./test";
import firebase from "./firebase"

export default combineReducers({
    test: test,
    firebase: firebase
});
