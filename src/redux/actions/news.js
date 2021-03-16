import {
  GET_CATEGORIES,
  GET_NEWS,
  GET_LATEST_NEWS,
  GET_NEWS_ITEM
} from "../type/news";

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
    image: "/react/images/news_1.jpg",
    day: 15,
    month: "May",
    title: "10 Tips to start your small business",
    author: {
      image: "/react/images/news_author_1.jpg",
      name: "Michael Smith",
      id: 11
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
    image: "/react/images/news_2.jpg",
    day: 16,
    month: "May",
    title: "Ideas for a better online marketing campaign",
    author: {
      image: "/react/images/news_author_1.jpg",
      name: "Michael Smith",
      id: 11
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
    image: "/react/images/news_3.jpg",
    day: 18,
    month: "May",
    title: "Tips to have an amazing conefrence call",
    author: {
      image: "/react/images/news_author_1.jpg",
      name: "Michael Smith",
      id: 11
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
    image: "/react/images/latest_1.jpg",
    title: "A big discovery in science",
    date: "April 02, 2017"
  },
  {
    id: 2,
    image: "/react/images/latest_2.jpg",
    title: "Marketing for everybody",
    date: "May 03, 2017"
  },
  {
    id: 3,
    image: "/react/images/latest_3.jpg",
    title: "New ways to improve ypurself",
    date: "May 03, 2017"
  }
];

export const getCategory = () => ({
  type: GET_CATEGORIES,
  payload: CATEGORIES_LIST
});

export const getNews = (pageNo, category, author) => ({
  type: GET_NEWS,
  payload: {
    items: NEWS_LIST,
    totalPage: 3,
    activePage: pageNo,
    activeCategory: category,
    activeAuthor: author,
    activeAuthorName: author && "Michael Smith"
  }
});

export const getLatestNews = () => ({
  type: GET_LATEST_NEWS,
  payload: LATEST_NEWS
});

export const getNewsItem = id => ({
  type: GET_NEWS_ITEM,
  payload: NEWS_LIST.find(item => item.id === id)
});
