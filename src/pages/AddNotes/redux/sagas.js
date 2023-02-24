// put is used to put the value into the action, action is dispatched, value goes to the reducer
// call is used to call the api

import { takeEvery, put, call } from "redux-saga/effects";
import { INIT_SAVE_NOTE } from "./actionTypes";

// pass a parameter to get the value from action to saga
function* saveNoteSaga(action) {
  yield console.log(action);
}

export default function* addNotesSaga() {
  yield takeEvery(INIT_SAVE_NOTE, saveNoteSaga);
}
