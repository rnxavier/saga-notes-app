// put is used to put the value into the action, action is dispatched, value goes to the reducer
// call is used to call the api

import { takeEvery, put, call } from "redux-saga/effects";
import { INIT_SAVE_NOTE, SAVE_NOTE_SUCCESS } from "./actionTypes";
import { v4 as uuidv4 } from "uuid";
import { saveNoteFailed, saveNoteSuccess } from "./actions";
import { getDatabase, ref, set } from "firebase/database";

// pass action parameter to get the value from action to saga
function* saveNoteSaga(action) {
  const db = getDatabase();
  yield set(ref(db, "notesList/" + action.noteValue), {
    noteTitle: action.noteValue,
  });

  // const dbUrl =
  //   "https://redux-notes-app-cee1f-default-rtdb.firebaseio.com/notesList.json";

  // try {
  //   const data = yield call(() => {
  //     return fetch(dbUrl, {
  //       method: "POST",
  //       headers: {
  //         Accept: `application/json`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: uuidv4(),
  //         name: action.noteValue,
  //       }),
  //     });
  //   });
  //   console.log(data);
  //   if (data.status === 200) {
  //     // yield put(saveNoteSuccess(true));
  //     yield put({ type: SAVE_NOTE_SUCCESS, success: true });
  //   }
  // } catch (error) {
  //   yield put(saveNoteFailed(true));
  //   console.log(error);
  // }
}

export default function* addNotesSaga() {
  yield takeEvery(INIT_SAVE_NOTE, saveNoteSaga);
}
