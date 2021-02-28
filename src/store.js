import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules/index";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default { store, persistor };
