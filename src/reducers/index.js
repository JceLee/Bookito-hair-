import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import firestore from "./firestore";
import currentUser from "./currentUser";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUser", "firestore"],
};

const rootReducer = combineReducers({
  firestore,
  currentUser: currentUser,
});

export default persistReducer(persistConfig, rootReducer);
