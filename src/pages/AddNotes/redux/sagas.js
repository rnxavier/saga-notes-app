// put is used to put the value into the action, action is dispatched, value goes to the reducer
// call is used to call the api

import { takeEvery, put } from "redux-saga/effects";
import { INIT_SAVE_NOTE } from "./actionTypes";
import db from "../../../firebase";
import { saveNoteSuccess } from "./actions";

// pass action parameter to get the value from action to saga
function* saveNoteSaga(action) {
  try {
    yield db.database().ref(`notesList/${action.noteTitle}`).set({
      noteTitle: action.noteTitle,
    });
    yield put(saveNoteSuccess(true));
  } catch (error) {
    console.log(error);
  }
}

export default function* addNotesSaga() {
  yield takeEvery(INIT_SAVE_NOTE, saveNoteSaga);
}
