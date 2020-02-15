import { GET_NEWS, GET_CATEGORIES, GET_LATEST_NEWS } from "../type/news";

const initialState = {
  categories: [],
  news: [],
  latestNews: [],
  totalPage: 0,
  activePage: 0,
  activeCategory: null
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload]
      };
    case GET_NEWS:
      const { items, ...rest } = action.payload;
      return {
        ...state,
        news: [...items],
        ...rest
      };
    case GET_LATEST_NEWS:
      return {
        ...state,
        latestNews: [...action.payload]
      };
    default:
      return state;
  }
};

export default newsReducer;
