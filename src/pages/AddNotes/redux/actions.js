import { GET_NOTE_VALUE } from "./actionTypes";

export const getNotesValue = (noteValue) => {
  return {
    type: GET_NOTE_VALUE,
    noteValue,
  };
};
