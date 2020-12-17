import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import firestore from "./firestore";
import currentUser from "./currentUser";
import appointments from "./appointments";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUser", "firestore", "appointments"],
};

const rootReducer = combineReducers({
  firestore,
  currentUser,
  appointments,
});

export default persistReducer(persistConfig, rootReducer);
