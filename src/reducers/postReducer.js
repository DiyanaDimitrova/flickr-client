import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADING
} from "../types/index";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      const { posts, page, pages, limit, total } = action.data;
      const mergedPosts = [...state.posts, ...posts];
      return {
        posts: mergedPosts,
        page,
        pages,
        limit,
        total,
        postsLoading: false
      };
    case FETCH_POSTS_ERROR:
      return { posts: [], error: true, postsLoading: false, ...state };
    case FETCH_POSTS_LOADING:
      return { error: false, postsLoading: true, ...state };
    default:
      return state;
  }
}
