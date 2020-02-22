import { EVENTS_GET_EVENTS, GET_EVENT_ITEM } from "../type/events";

const initialState = {
  events: [],
  totalPage: 0,
  activePage: 0,
  eventItem: null
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
    case GET_EVENT_ITEM:
      return {
        ...state,
        eventItem: { ...action.payload }
      };
    default:
      return state;
  }
};

export default eventReducer;
