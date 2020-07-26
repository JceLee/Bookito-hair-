import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'

const store = createStore(
        reducer,
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))
);

export default store;
