import errorTypes from "./error.types";

const initialState = {
  errorStore: { isError: false, msg: "" },
  errorFront: { isError: false, msg: "" },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case errorTypes.GET_ERROR_STORE:
      return {
        ...state,
        errorStore: { isError: true, msg: action.payload },
      };
    case errorTypes.GET_ERROR_FRONT:
      return {
        ...state,
        errorFront: { isError: true, msg: action.payload },
      };
    case errorTypes.CLEAR_ERROR:
      return {
        initialState,
      };
    default:
      return state;
  }
}
