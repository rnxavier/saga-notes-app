import {
  DELETE_NOTE,
  FETCHING_NOTES_FAILED,
  FETCHING_NOTES_SUCCESS,
} from "./actionTypes";

const initialState = {
  notesList: [],
  fetchingFailed: false,
};

const notesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES_SUCCESS:
      return {
        ...state,
        notesList: action.notesList,
      };
    case FETCHING_NOTES_FAILED:
      return { ...state, fetchingFailed: action.failed };
    default:
      return state;
  }
};

export default notesListReducer;
