import axios from "axios";

export const GET_DATA = "get_data";

export const getData = () => async (dispatch) => {
  console.log("dispatching");
  try {
    let result = await axios.get("http://localhost:3000/admin/news");
    dispatch({
      type: GET_DATA,
      payload: result.data,
    });
  } catch (error) {
    console.log("an error has occured");
  }
};
