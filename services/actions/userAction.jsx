import axios from "axios";
import { get_user_failed, get_user_success, user_request } from "../types";

export const usersList = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: user_request,
      });
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      dispatch({
        type: get_user_success,
        payLoad: res.data,
      });
    } catch (error) {
      dispatch({
        type: get_user_failed,
        payLoad: error.message,
      });
    }
  };
};
