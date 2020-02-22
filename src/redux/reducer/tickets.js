import { TICKETS_GET_EVENTS, TICKETS_GET_SPEAKERS } from "../type/tickets";

const initialState = {
  events: [],
  speakers: []
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKETS_GET_EVENTS:
      return {
        ...state,
        events: action.payload.map(item => ({
          label: item.title,
          value: item.id
        }))
      };
    case TICKETS_GET_SPEAKERS:
      return {
        ...state,
        speakers: action.payload.map(item => ({
          label: item.name,
          value: item.id
        }))
      };
    default:
      return state;
  }
};
