import {
  FETCHING_NOTES_FAILED,
  FETCHING_NOTES_SUCCESS,
  INIT_GET_NOTES,
  DELETE_NOTE,
  DELETE_ALL_NOTES,
} from "./actionTypes";

export const initGetNotes = () => {
  return {
    type: INIT_GET_NOTES,
  };
};

export const fetchingNotesSuccess = (notesList) => {
  return {
    type: FETCHING_NOTES_SUCCESS,
    notesList,
  };
};
export const fetchingNotesFailed = (failed) => {
  return {
    type: FETCHING_NOTES_FAILED,
    failed,
  };
};

export const deleteNote = (noteTitle) => {
  return {
    type: DELETE_NOTE,
    noteTitle,
  };
};

export const deleteAllNotes = () => {
  return {
    type: DELETE_ALL_NOTES,
  };
};
