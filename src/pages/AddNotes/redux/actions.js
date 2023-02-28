import {
  INIT_SAVE_NOTE,
  SAVE_NOTE_SUCCESS,
  SAVE_NOTE_FAILED,
} from "./actionTypes";

export const initSaveNote = (noteTitle) => {
  return {
    type: INIT_SAVE_NOTE,
    noteTitle,
  };
};
export const saveNoteSuccess = (success) => {
  return {
    type: SAVE_NOTE_SUCCESS,
    success,
  };
};
export const saveNoteFailed = (failed) => {
  return {
    type: SAVE_NOTE_FAILED,
    failed,
  };
};
