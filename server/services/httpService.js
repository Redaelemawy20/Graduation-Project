import axios from "axios";
import { toast } from "react-toastify";
import confg from "../config/config.json";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // console.log("logging the error", error);
    // alert("An unexpected error occurred.");
    console.log(error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});
const httpService = axios.create({
  baseURL: confg.development.apiEndPoint,
  withCredentials: true,
});
export default httpService;
