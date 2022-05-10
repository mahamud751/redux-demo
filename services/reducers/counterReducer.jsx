import { value_decrement, value_increment } from "../types";

const initialState = {
  count: 5,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case value_increment:
      return {
        ...state,
        count: state.count + action.payLoad,
      };
    case value_decrement:
      return {
        ...state,
        count: state.count - action.payLoad,
      };

    default:
      return state;
  }
}
