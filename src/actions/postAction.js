import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_LOADING,
  FETCH_TAG_POSTS_SUCCESS,
  FETCH_TAG_POSTS_ERROR,
  FETCH_TAG_POSTS_LOADING
} from "../types";
import axios from "axios";
import queryString from "query-string";

const apiUrl = `https://holiday-extras-server.herokuapp.com/posts`;

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
      .get(`${apiUrl}?${queryString.stringify(payload)}`, {
        crossdomain: true
      })
      .then(response => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchPostsError());
      });
  };
};

export const fetchTagPostsLoading = () => {
  return {
    type: FETCH_TAG_POSTS_LOADING
  };
};

export const fetchTagPostsSuccess = payload => {
  return {
    type: FETCH_TAG_POSTS_SUCCESS,
    payload
  };
};

export const fetchTagPostsError = payload => {
  return {
    type: FETCH_TAG_POSTS_ERROR,
    payload
  };
};

export const getTagPostsAction = payload => {
  return dispatch => {
    dispatch(fetchTagPostsLoading());
    return axios
      .get(`${apiUrl}?${queryString.stringify(payload)}`)
      .then(response => {
        dispatch(fetchTagPostsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchTagPostsError());
      });
  };
};
