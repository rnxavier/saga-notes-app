import { combineReducers } from "@reduxjs/toolkit";
import { addNotesReducer } from "../pages/AddNotes/redux/reducers";

export default combineReducers({
  addNotesReducer,
});
