import errorTypes from "./error.types";

const initialState = {
  msg: "",
  isError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case errorTypes.GET_ERROR:
      return {
        isError: true,
        msg: action.payload,
      };
    case errorTypes.CLEAR_ERROR:
      return {
        isError: false,
        msg: "",
      };
    default:
      return state;
  }
}
