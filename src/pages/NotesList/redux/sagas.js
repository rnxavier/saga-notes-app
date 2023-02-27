// put is used to put the value into the action, action is dispatched, value goes to the reducer
// call is used to call the api
import { takeEvery, put, call } from "redux-saga/effects";
import {
  FETCHING_NOTES_FAILED,
  FETCHING_NOTES_SUCCESS,
  INIT_GET_NOTES,
} from "./actionTypes";

function* fetchNotesSaga() {
  const notesListArray = [];
  console.log("yeee");
  try {
    return fetch(
      "https://redux-notes-app-cee1f-default-rtdb.firebaseio.com/notesList.json"
    )
      .then((res) => res.json())
      .then((data) => notesListArray.push(data))
      .then(() => console.log(notesListArray));
  } catch (error) {
    yield put({ type: FETCHING_NOTES_FAILED });
    console.log(error);
  }
}

export default function* notesListSaga() {
  yield takeEvery(INIT_GET_NOTES, fetchNotesSaga);
}
