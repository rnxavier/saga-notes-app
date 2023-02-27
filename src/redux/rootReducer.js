import { combineReducers } from "@reduxjs/toolkit";
import addNotesReducer from "../pages/AddNotes/redux/reducers";
import notesListReducer from "../pages/NotesList/redux/reducers";

export default combineReducers({
  addNotesReducer,
  notesListReducer,
});
