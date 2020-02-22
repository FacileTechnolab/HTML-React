import { TICKETS_GET_EVENTS, TICKETS_GET_SPEAKERS } from "../type/tickets";

const EVENT_LIST = [
  {
    id: 1,
    day: 15,
    month: "May",
    title: "Marketing Sollutions in 2018"
  },
  {
    id: 2,
    day: 16,
    month: "May",
    title: "Blockchain technology"
  },
  {
    id: 3,
    day: 17,
    month: "May",
    title: "Internet of things"
  }
];

const SPEAKERS_LIST = [
  {
    id: 12,
    name: "William Smith"
  },
  {
    id: 13,
    name: "Lidia Maria Parker"
  },
  {
    id: 14,
    name: "James Morrison"
  },
  {
    id: 15,
    name: "Patricia Freeman"
  }
];

export const getSpeakers = () => ({
  type: TICKETS_GET_SPEAKERS,
  payload: SPEAKERS_LIST
});

export const getEvents = () => ({
  type: TICKETS_GET_EVENTS,
  payload: EVENT_LIST
});
