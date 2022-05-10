import { get_user_failed, get_user_success, user_request } from "../types";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case user_request:
      return {
        ...state,
        loading: true,
      };
    case get_user_success:
      return {
        ...state,
        loading: false,
        users: action.payLoad,
      };
    case get_user_failed:
      return {
        ...state,
        users: [],
        error: action.error,
      };

    default:
      return state;
  }
}
