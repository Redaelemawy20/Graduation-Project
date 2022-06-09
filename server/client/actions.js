import { toast } from "react-toastify";

export const GET_DATA = "get_data";
export const FETCH_CURRENT_USER = "fetch_current_user";
export const SET_LOADING = "set_loading";
export const getData = () => async (dispatch, getState, axiosInstance) => {
  try {
    let result = await axiosInstance.get("/news");
    dispatch({
      type: GET_DATA,
      payload: result.data,
    });
  } catch (error) {
    toast.error("faild to laod news!!");
    // console.log("an error has occured");
  }
};
export const fetchCurrentUser =
  () => async (dispatch, getState, axiosInstance) => {
    const res = await axiosInstance.get("/auth/current-user");
    dispatch({
      type: FETCH_CURRENT_USER,
      payload: res,
    });
  };

export const setLoading = (loadingState) => {
  console.log("loading state", loadingState);
  return {
    type: SET_LOADING,
    payload: { loadingState },
  };
};
