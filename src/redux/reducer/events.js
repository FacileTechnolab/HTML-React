import { EVENTS_GET_EVENTS } from "../type/events";

const initialState = {
  events: [],
  totalPage: 0,
  activePage: 0
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_GET_EVENTS:
      return {
        ...state,
        events: [...action.payload.items],
        totalPage: action.payload.totalPage,
        activePage: action.payload.activePage
      };
    default:
      return state;
  }
};

export default eventReducer;
