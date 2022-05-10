import { value_decrement, value_increment } from "../types";

export const increment = (a) => {
  return {
    type: value_increment,
    payLoad: a,
  };
};
export const decrement = (a) => {
  return {
    type: value_decrement,
    payLoad: a,
  };
};
