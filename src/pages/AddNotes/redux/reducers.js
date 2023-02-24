import { GET_NOTE_VALUE } from "./actionTypes";

const initialState = {
  flag: false,
};

export const addNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTE_VALUE:
      return {
        ...state,
        flag: true,
      };
    default:
      return state;
  }
};
