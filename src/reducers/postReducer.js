import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADING,
  FETCH_TAG_POSTS_SUCCESS,
  FETCH_TAG_POSTS_ERROR,
  FETCH_TAG_POSTS_LOADING
} from "../types/index";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      const { posts, page, pages, limit, total } = action.payload;
      const statePosts = page === 1 ? [] : state.items;
      const mergedPosts = [...statePosts, ...posts];
      return {
        items: mergedPosts,
        page,
        pages,
        limit,
        total,
        postsLoading: false,
        error: false
      };
    case FETCH_POSTS_ERROR:
      return { ...state, posts: [], postsLoading: false, error: true };
    case FETCH_POSTS_LOADING:
      return { ...state, postsLoading: true, error: false };
    case FETCH_TAG_POSTS_SUCCESS:
      const {
        posts: tagPosts,
        page: tagPage,
        pages: tagPages,
        limit: tagLimit,
        total: tagTotal
      } = action.payload;
      const stateTagPosts = tagPage === 1 ? [] : state.items;
      const mergedTagPosts = [...stateTagPosts, ...tagPosts];
      return {
        items: mergedTagPosts,
        page: tagPage,
        pages: tagPages,
        limit: tagLimit,
        total: tagTotal,
        postsLoading: false,
        error: false
      };
    case FETCH_TAG_POSTS_ERROR:
      return { ...state, posts: [], postsLoading: false, error: true };
    case FETCH_TAG_POSTS_LOADING:
      return { ...state, postsLoading: true, error: false };
    default:
      return state;
  }
}
