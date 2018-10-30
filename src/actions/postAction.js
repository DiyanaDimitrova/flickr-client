import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADING
} from "../types";
import axios from "axios";
import queryString from "query-string";

const apiUrl = `http://localhost:3001/posts`;

export const fetchPostsLoading = () => {
  return {
    type: FETCH_POSTS_LOADING
  };
};

export const fetchPostsSuccess = payload => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload
  };
};

export const fetchPostsError = payload => {
  return {
    type: FETCH_POSTS_ERROR,
    payload
  };
};

export const getPostsAction = payload => {
  return dispatch => {
    dispatch(fetchPostsLoading());
    return axios
      .get(`${apiUrl}?${queryString.stringify(payload)}`)
      .then(response => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchPostsError());
      });
  };
};
