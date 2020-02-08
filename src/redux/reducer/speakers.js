import { GET_SPEAKERS } from "../type/speakers";

const initialState = {
  speakers: []
};

export const speakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPEAKERS:
      return { ...state, speakers: [...action.payload] };
    default:
      return state;
  }
};

export default speakerReducer;
