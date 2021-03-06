import { GET_PRICING, GET_EVENTS, GET_INTROS } from "../type/home";

const INTRO_LIST = [
  {
    order: 1,
    image: "/react/images/intro_1.jpg",
    title: "Conference Program",
    subtitle: "Donec quis metus ac arcu luctus accumsan."
  },
  {
    order: 2,
    image: "/react/images/intro_2.jpg",
    title: "Supersessions",
    subtitle: "Donec quis metus ac arcu luctus accumsan."
  },
  {
    order: 3,
    image: "/react/images/intro_3.jpg",
    title: "The Speakers",
    subtitle: "Donec quis metus ac arcu luctus accumsan."
  },
  {
    order: 4,
    image: "/react/images/intro_4.jpg",
    title: "Explore Sessions",
    subtitle: "Donec quis metus ac arcu luctus accumsan."
  },
  {
    order: 5,
    image: "/react/images/intro_5.jpg",
    title: "Directory",
    subtitle: "Donec quis metus ac arcu luctus accumsan."
  },
  {
    order: 6,
    image: "/react/images/intro_6.jpg",
    title: "Speakers Schedule",
    subtitle: "Donec quis metus ac arcu luctus accumsan."
  }
];

const PRICING_LIST = [
  {
    id: 1,
    level: "Beginner",
    price: "Free",
    list: [
      "3 Conference Tickets",
      "Vip Table",
      "Drinks",
      "Special PASS",
      "VIP Dinner"
    ]
  },
  {
    id: 2,
    level: "recommended",
    price: "$29.90",
    list: [
      "3 Conference Tickets",
      "Vip Table",
      "Drinks",
      "Special PASS",
      "VIP Dinner"
    ],
    className: "pricing_item_mid"
  },
  {
    id: 3,
    level: "Professional",
    price: "$59.90",
    list: [
      "3 Conference Tickets",
      "Vip Table",
      "Drinks",
      "Special PASS",
      "VIP Dinner"
    ]
  }
];

const EVENT_LIST = [
  {
    id: "111",
    time: "14:00",
    place: "Auditorium",
    title: "Business 101",
    duration: "02 PM - 03 PM",
    speaker: "Speaker: Daniel Hill",
    image: "/react/images/event_1.jpg",
    date: 22
  },
  {
    id: "112",
    time: "15:00",
    place: "Auditorium",
    title: "About technology",
    duration: "03 PM - 05 PM",
    speaker: "Speaker: Daniel Hill",
    image: "/react/images/event_2.jpg",
    date: 22
  },
  {
    id: "113",
    time: "17:00",
    place: "Auditorium",
    title: "Conference calls",
    duration: "05 PM - 08 PM",
    speaker: "Speaker: Daniel Hill",
    image: "/react/images/event_3.jpg",
    date: 22
  },
  {
    id: "114",
    time: "20:00",
    place: "Auditorium",
    title: "Drinks and dinner",
    duration: "08 PM - 09 PM",
    speaker: "Speaker: Daniel Hill",
    image: "/react/images/event_4.jpg",
    date: 22
  },
  {
    id: "115",
    time: "14:00",
    place: "Auditorium",
    title: "Business 101",
    duration: "02 PM - 03 PM",
    speaker: "Speaker: Daniel Hill",
    image: "/react/images/event_5.jpg",
    date: 23
  },
  {
    id: "116",
    time: "15:00",
    place: "Auditorium",
    title: "About technology",
    duration: "03 PM - 05 PM",
    speaker: "Speaker: Daniel Hill",
    image: "/react/images/event_6.jpg",
    date: 23
  },
  {
    id: "117",
    time: "17:00",
    place: "Auditorium",
    title: "Conference calls",
    duration: "05 PM - 08 PM",
    speaker: "Speaker: Daniel Hill",
    image: "/react/images/event_7.jpg",
    date: 23
  },
  {
    id: "118",
    time: "20:00",
    place: "Auditorium",
    title: "Drinks and dinner",
    duration: "08 PM - 09 PM",
    speaker: "Speaker: Daniel Hill",
    image: "/react/images/event_8.jpg",
    date: 23
  }
];

export const getPricing = () => ({
  type: GET_PRICING,
  payload: PRICING_LIST
});

export const getEvent = () => ({
  type: GET_EVENTS,
  payload: EVENT_LIST
});

export const getIntro = () => ({
  type: GET_INTROS,
  payload: INTRO_LIST
});
