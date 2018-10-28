import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADING
} from "../types";
import axios from "axios";
const apiUrl = `http://localhost:3001/posts`;

export const getPostsAction = payload => {
  console.log("payload", payload);
  return dispatch => {
    dispatch(fetchPostsSuccess({}));
    return axios
      .get(
        payload && payload.tags
          ? `${apiUrl}?tags=${payload.tags}&page=${payload.page}&limit=${
              payload.limit
            }`
          : `${apiUrl}?page=${payload.page}&limit=${payload.limit}`
      )
      .then(response => {
        console.log("response", response.data);
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchPostsError(error));
      });
  };
};

export const fetchPostsSuccess = data => {
  return {
    type: FETCH_POSTS_SUCCESS,
    data
  };
};

export const fetchPostsError = data => {
  return {
    type: FETCH_POSTS_ERROR,
    data
  };
};
export const fetchPostsLoading = data => {
  return {
    type: FETCH_POSTS_LOADING,
    data
  };
};
