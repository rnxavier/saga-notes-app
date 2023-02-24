import { GET_NOTE_VALUE } from "./actionTypes";

export const getNotesValue = (noteValue) => {
  console.log(`note value is ${noteValue}`);
  return {
    type: GET_NOTE_VALUE,
    noteValue,
  };
};
