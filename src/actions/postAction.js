import { FETCH_POSTS } from "../types";
import axios from "axios";
// const key = "29338b632dd810eae994390263fa0249";
// const secret = "eeac56515e6ed14e";
const apiUrl = `http://localhost:3001/posts`;

console.log("FETCH_POSTS", FETCH_POSTS);

export const getPostsAction = payload => {
  return dispatch => {
    return axios
      .get(
        payload && payload.tags ? `${apiUrl}?tag=${payload.tags}` : `${apiUrl}`
      )
      .then(response => {
        console.log("response", response.data.posts);
        dispatch(getPostSuccess(response.data.posts));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getPostSuccess = posts => {
  return {
    type: FETCH_POSTS,
    posts
  };
};
