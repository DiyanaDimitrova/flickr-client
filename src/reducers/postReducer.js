import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADING
} from "../types/index";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      const { posts, page, pages, limit, total } = action.payload;
      return {
        page,
        pages,
        limit,
        total,
        items: [...(page === 1 ? [] : state.items), ...posts],
        postsLoading: false,
        error: false
      };
    case FETCH_POSTS_ERROR:
      return { ...state, postsLoading: false, error: true };
    case FETCH_POSTS_LOADING:
      return { ...state, postsLoading: true, error: false };
    default:
      return state;
  }
}
