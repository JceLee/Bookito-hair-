import { call, put, takeEvery } from "redux-saga/effects";
import { types, actions } from "./actions";
import { firebaseStore } from "../../config/fbConfig";

export function* loadData(action) {
  try {
    const data = yield call(() =>
      firebaseStore.collection("users").where("accountType", "==", action.payload).get()
    );

    const designerList = [];
    data.docs.forEach((doc) => {
      designerList.push(doc.data());
    });
    yield put(actions.load_success(designerList));
  } catch (e) {
    console.log(e);
    yield put(actions.load_request(e));
  }
}

export function* designerSaga() {
  yield takeEvery(types.LOAD_REQUEST, loadData);
}
