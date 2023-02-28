import {
  FETCHING_NOTES,
  FETCHING_NOTES_FAILED,
  FETCHING_NOTES_SUCCESS,
  INIT_GET_NOTES,
  DELETE_NOTE,
} from "./actionTypes";

export const initGetNotes = () => {
  return {
    type: INIT_GET_NOTES,
  };
};
export const fetchingNotes = () => {
  return {
    type: FETCHING_NOTES,
  };
};
export const fetchingNotesSuccess = (notesList) => {
  return {
    type: FETCHING_NOTES_SUCCESS,
    notesList,
  };
};
export const fetchingNotesFailed = () => {
  return {
    type: FETCHING_NOTES_FAILED,
  };
};

export const deleteNote = (noteTitle) => {
  return {
    type: DELETE_NOTE,
    noteTitle,
  };
};
