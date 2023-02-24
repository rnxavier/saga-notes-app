// put is used to put the value into the action, action is dispatched, value goes to the reducer
// call is used to call the api

import { takeEvery, put, call } from "redux-saga/effects";
import { GET_NOTE_VALUE } from "./actionTypes";

function* getNotesSaga() {}

export default function* addNotesSaga() {
  yield takeEvery(GET_NOTE_VALUE, getNotesSaga);
}
