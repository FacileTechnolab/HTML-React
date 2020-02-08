import { combineReducers } from "redux";

import { speakerReducer } from "./speakers";
import { homeReducer } from "./home";
import { eventReducer } from "./events";

export const appReducer = combineReducers({
  speaker: speakerReducer,
  home: homeReducer,
  event: eventReducer
});
