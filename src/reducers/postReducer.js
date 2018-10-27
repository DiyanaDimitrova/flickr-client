// export default (state = {}, action) => {
//   switch (action.type) {
//     case "DATA_ACTION":
//       console.log("action.payload", action);
//       return {
//         result: action.payload
//       };
//     default:
//       return state;
//   }
// };

import { FETCH_POSTS } from "../types/index";

export default function postReducer(state = [], action) {
  switch (action.type) {
    // case ADD_POST:
    //   return [...state, action.payload];
    // case DELETE_POST:
    // return state.filter(post => post._id !== action.payload.id);
    case FETCH_POSTS:
      console.log("action", action);
      return action.posts;
    default:
      return state;
  }
}
