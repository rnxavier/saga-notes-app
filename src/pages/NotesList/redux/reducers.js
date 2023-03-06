import {
  FETCHING_NOTES_FAILED,
  FETCHING_NOTES_SUCCESS,
  INIT_GET_NOTES,
} from "./actionTypes";

const initialState = {
  notesList: [],
  fetchingNotesList: true,
  fetchingFailed: false,
};

const notesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_GET_NOTES:
      return {
        ...state,
      };
    case FETCHING_NOTES_SUCCESS:
      return {
        ...state,
        fetchingNotesList: false,
        notesList: action.notesList,
      };
    case FETCHING_NOTES_FAILED:
      return { ...state, fetchingFailed: action.failed };
    default:
      return state;
  }
};

export default notesListReducer;
