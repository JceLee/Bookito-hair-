import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { all } from "redux-saga/effects";
import designersReducer, { designerSaga } from "./designer";
import currentUser from "./currentUser";
import appointments from "./appointments";
import selectedDesigner from "./selectedDesigner";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUser", "firestore", "appointments", "selectedDesigner"],
};

const rootReducer = combineReducers({
  designerList: designersReducer,
  currentUser,
  appointments,
  selectedDesigner,
});

export function* rootSaga() {
  yield all([designerSaga()]);
}

export default persistReducer(persistConfig, rootReducer);
