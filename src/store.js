import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export default { store, persistor };
