export const GET_DATA = "get_data";
export const FETCH_CURRENT_USER = "fetch_current_user";
export const getData = () => async (dispatch, getState, axiosInstance) => {
  console.log("dispatching");
  try {
    let result = await axiosInstance.get("/admin/news");
    dispatch({
      type: GET_DATA,
      payload: result.data,
    });
  } catch (error) {
    console.log("an error has occured");
  }
};
export const fetchCurrentUser =
  () => async (dispatch, getState, axiosInstance) => {
    // const res = await axios.get("http://localhost:3000/auth/current-user", {
    //   withCredentials: true,
    // });
    const res = await axiosInstance("/auth/current-user", {
      method: "get",
      withCredentials: true,
    });

    console.log("*****************************************", res.data);
    dispatch({
      type: FETCH_CURRENT_USER,
      payload: res,
    });
  };
