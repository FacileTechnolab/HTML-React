import { GET_CATEGORIES, GET_NEWS, GET_LATEST_NEWS } from "../type/news";

const CATEGORIES_LIST = [
  {
    id: 1,
    title: "The Speakers"
  },
  {
    id: 2,
    title: "Tips & Tricks"
  },
  {
    id: 3,
    title: "Events & Lifestyle"
  },
  {
    id: 4,
    title: "Marketing"
  },
  {
    id: 5,
    title: "Uncategorized"
  }
];

const NEWS_LIST = [
  {
    id: 1,
    image: "/images/news_1.jpg",
    day: 15,
    month: "May",
    title: "10 Tips to start your small business",
    author: {
      image: "/images/news_author_1.jpg",
      name: "Michael Smith"
    },
    tags: [
      {
        id: 2,
        title: "Tips & Tricks"
      },
      {
        id: 4,
        title: "Marketing"
      }
    ],
    comments: "3",
    desc:
      "Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orci luctus."
  },
  {
    id: 2,
    image: "/images/news_2.jpg",
    day: 16,
    month: "May",
    title: "Ideas for a better online marketing campaign",
    author: {
      image: "/images/news_author_1.jpg",
      name: "Michael Smith"
    },
    tags: [
      {
        id: 2,
        title: "Tips & Tricks"
      },
      {
        id: 1,
        title: "The Speakers"
      }
    ],
    comments: "8",
    desc:
      "Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orci luctus."
  },
  {
    id: 3,
    image: "/images/news_3.jpg",
    day: 18,
    month: "May",
    title: "Tips to have an amazing conefrence call",
    author: {
      image: "/images/news_author_1.jpg",
      name: "Michael Smith"
    },
    tags: [
      {
        id: 2,
        title: "Tips & Tricks"
      },
      {
        id: 4,
        title: "Marketing"
      }
    ],
    comments: "0",
    desc:
      "Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orci luctus."
  }
];

const LATEST_NEWS = [
  {
    id: 1,
    image: "/images/latest_1.jpg",
    title: "A big discovery in science",
    date: "April 02, 2017"
  },
  {
    id: 2,
    image: "/images/latest_2.jpg",
    title: "Marketing for everybody",
    date: "May 03, 2017"
  },
  {
    id: 3,
    image: "/images/latest_3.jpg",
    title: "New ways to improve ypurself",
    date: "May 03, 2017"
  }
];

export const getCategory = () => ({
  type: GET_CATEGORIES,
  payload: CATEGORIES_LIST
});

export const getNews = (pageNo, category) => ({
  type: GET_NEWS,
  payload: {
    items: NEWS_LIST,
    totalPage: 3,
    activePage: pageNo,
    activeCategory: category
  }
});

export const getLatestNews = () => ({
  type: GET_LATEST_NEWS,
  payload: LATEST_NEWS
});
