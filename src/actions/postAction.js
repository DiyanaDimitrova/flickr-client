import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADING,
  FETCH_TAG_POSTS_SUCCESS,
  FETCH_TAG_POSTS_ERROR,
  FETCH_TAG_POSTS_LOADING
} from "../types";
import axios from "axios";
const apiUrl = `https://holiday-extras-server.herokuapp.com/posts`;
axios.defaults.baseURL = `https://holiday-extras-server.herokuapp.com/posts`;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const getPostsAction = payload => {
  console.log("payload", payload);
  return dispatch => {
    dispatch(fetchPostsLoading());
    return axios
      .get(`${apiUrl}?page=${payload.page}&limit=${payload.limit}`)
      .then(response => {
        console.log("response.data", response.data, payload);
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchPostsError(error));
      });
  };
};

export const getTagPostsAction = payload => {
  console.log("payload", payload);
  return dispatch => {
    dispatch(fetchTagPostsLoading());
    return axios
      .get(
        `${apiUrl}?tags=${payload.tags}&page=${payload.page}&limit=${
          payload.limit
        }`
      )
      .then(response => {
        console.log("response.data", response.data, payload);
        dispatch(fetchTagPostsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchTagPostsError(error));
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

export const fetchTagPostsSuccess = data => {
  return {
    type: FETCH_TAG_POSTS_SUCCESS,
    data
  };
};

export const fetchTagPostsError = data => {
  return {
    type: FETCH_TAG_POSTS_ERROR,
    data
  };
};
export const fetchTagPostsLoading = data => {
  return {
    type: FETCH_TAG_POSTS_LOADING,
    data
  };
};
