import { all, fork } from "redux-saga/effects";
import addNotesSaga from "../pages/AddNotes/redux/sagas";
import notesListSaga from "../pages/NotesList/redux/sagas";

export default function* rootSaga() {
  yield all([fork(addNotesSaga), fork(notesListSaga)]);
}

// for multiple sagas
// yield all([fork(addNotesSaga), fork(secondSaga), fork(thirdSaga)])
