import { all, fork } from "redux-saga/effects";
import addNotesSaga from "../pages/AddNotes/redux/sagas";

export default function* rootSaga() {
  yield all([fork(addNotesSaga)]);
}

// for multiple sagas
// yield all([fork(addNotesSaga), fork(secondSaga), fork(thirdSaga)])
