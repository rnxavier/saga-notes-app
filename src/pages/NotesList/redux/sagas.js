// put is used to put the value into the action, action is dispatched, value goes to the reducer
// call is used to call the api
import { takeEvery, put, call, take } from "redux-saga/effects";
import { fetchingNotesSuccess } from "./actions";
import axios from "axios";
import { db } from "../../../firebase";

import {
  DELETE_NOTE,
  FETCHING_NOTES_FAILED,
  FETCHING_NOTES_SUCCESS,
  INIT_GET_NOTES,
} from "./actionTypes";

function* getNotesListSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://redux-notes-app-cee1f-default-rtdb.firebaseio.com/notesList.json"
    );
    if (response && response.status === 200) {
      const { data } = response;
      const notesListArray = [];
      // console.log(data);
      for (const i in data) {
        notesListArray.push(data[i]);
      }
      console.log(notesListArray);
      yield put({ type: FETCHING_NOTES_SUCCESS, notesList: notesListArray });
    }
  } catch (error) {
    console.log(error);
  }
}

function* deleteNoteSaga() {
  yield console.log("delete meee");
  // try {
  //   axios.delete(
  //     `https://redux-notes-app-cee1f-default-rtdb.firebaseio.com/notesList/${key}`
  //   );
  // } catch (error) {
  //   console.log(error);
  // }
}

export default function* notesListSaga() {
  yield takeEvery(INIT_GET_NOTES, getNotesListSaga);
  yield takeEvery(DELETE_NOTE, deleteNoteSaga);
}
