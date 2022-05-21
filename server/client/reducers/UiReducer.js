import { SET_LOADING } from "../actions";

export default (state = { loading: false }, action) => {
  switch (action.type) {
    case SET_LOADING: {
      const state = { ...state };
      // console.log("da", action.payload);
      state.loading = action.payload.loadingState;
      return state;
    }

    default:
      return state;
  }
};
