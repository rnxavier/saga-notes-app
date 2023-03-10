import { SAVE_NOTE_FAILED, SAVE_NOTE_SUCCESS } from "./actionTypes";

const initialState = {
  success: false,
  failed: false,
};

const addNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NOTE_SUCCESS:
      return {
        ...state,
        success: action.success,
      };
    case SAVE_NOTE_FAILED:
      return {
        ...state,
        failed: action.failed,
      };
    default:
      return state;
  }
};

export default addNotesReducer;
