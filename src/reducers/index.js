import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import firestore from "./firestore";
import signIn from "./signIn";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["signIn", "firestore"]
};

const rootReducer = combineReducers({
  firestore,
  signIn,
});

export default persistReducer(persistConfig, rootReducer);
