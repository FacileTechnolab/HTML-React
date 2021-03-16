import { EVENTS_GET_EVENTS, GET_EVENT_ITEM } from "../type/events";

const EVENT_LIST = [
  {
    id: 1,
    image: "/react/images/event_9.jpg",
    day: 15,
    month: "May",
    title: "Marketing Sollutions in 2018",
    location: "@ Miami Auditorium",
    desc:
      "Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orciluctus.",
    speaker: [
      {
        image: "/react/images/event_speaker_1.jpg",
        name: "Michael Smith",
        title: "Marketing Specialist"
      },
      {
        image: "/react/images/event_speaker_2.jpg",
        name: "Jessica Williams",
        title: "Marketing Specialist"
      }
    ]
  },
  {
    id: 2,
    image: "/react/images/event_10.jpg",
    day: 16,
    month: "May",
    title: "Blockchain technology",
    location: "@ Miami Auditorium",
    desc:
      "Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orciluctus.",
    speaker: [
      {
        image: "/react/images/event_speaker_1.jpg",
        name: "Michael Smith",
        title: "Marketing Specialist"
      },
      {
        image: "/react/images/event_speaker_2.jpg",
        name: "Jessica Williams",
        title: "Marketing Specialist"
      }
    ]
  },
  {
    id: 3,
    image: "/react/images/event_11.jpg",
    day: 17,
    month: "May",
    title: "Internet of things",
    location: "@ Miami Auditorium",
    desc:
      "Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orciluctus.",
    speaker: [
      {
        image: "/react/images/event_speaker_1.jpg",
        name: "Michael Smith",
        title: "Marketing Specialist"
      },
      {
        image: "/react/images/event_speaker_2.jpg",
        name: "Jessica Williams",
        title: "Marketing Specialist"
      }
    ]
  }
];

export const getEvent = pageNo => ({
  type: EVENTS_GET_EVENTS,
  payload: {
    items: EVENT_LIST,
    totalPage: 3,
    activePage: pageNo
  }
});

export const getEventItem = id => ({
  type: GET_EVENT_ITEM,
  payload: EVENT_LIST.find(item => item.id === id)
});
