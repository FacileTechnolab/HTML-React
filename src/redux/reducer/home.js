import { GET_EVENTS, GET_PRICING, GET_INTROS } from "../type/home";

const initialState = {
  events: [],
  pricing: [],
  intros: []
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, events: [...action.payload] };
    case GET_PRICING:
      return { ...state, pricing: [...action.payload] };
    case GET_INTROS:
      return { ...state, intros: [...action.payload] };
    default:
      return state;
  }
};

export default homeReducer;
