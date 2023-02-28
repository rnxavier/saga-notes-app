import {
  FETCHING_NOTES,
  FETCHING_NOTES_FAILED,
  FETCHING_NOTES_SUCCESS,
} from "./actionTypes";

const initialState = {
  notesList: [],
  fetchingNotes: false,
  fetchingFailed: false,
};

const notesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return { ...state, fetchingNotes: true };
    case FETCHING_NOTES_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        notesList: action.notesList,
      };
    case FETCHING_NOTES_FAILED:
      return { ...state, fetchingFailed: action.failed };
    default:
      return state;
  }
};

export default notesListReducer;
