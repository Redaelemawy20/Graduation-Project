import { GET_DATA } from "./actions";

export default (state = {}, action) => {
  console.log("action", action.payload, state, action.type);
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};
