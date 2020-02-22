import { combineReducers } from "redux";

import { speakerReducer } from "./speakers";
import { homeReducer } from "./home";
import { eventReducer } from "./events";
import { newsReducer } from "./news";
import { ticketReducer } from "./tickets";

export const appReducer = combineReducers({
  speaker: speakerReducer,
  home: homeReducer,
  event: eventReducer,
  news: newsReducer,
  ticket: ticketReducer
});
