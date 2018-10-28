import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADING
} from "../types/index";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      const { posts, page, pages, limit, total } = action.data;
      return { posts, page, pages, limit, total, postsLoading: false };
    case FETCH_POSTS_ERROR:
      console.log("action", action);
      return { ...action, postsLoading: false };
    case FETCH_POSTS_LOADING:
      return { postsLoading: true };
    default:
      return state;
  }
}
