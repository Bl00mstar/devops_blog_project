import actionTypes from "./action.types";

const initialState = {
  tool: { selectedTool: "" },
  path: {
    isLoading: true,
    selectedPath: "HOME",
    title: "DevOps Notes",
    content: [],
  },
  post: { postId: "" },
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADED_PATH:
      return {
        ...state,
        path: {
          ...state.path,
          isLoading: false,
          content: action.payload,
        },
      };
    case actionTypes.SELECT_PATH:
      return {
        ...state,
        tool: {
          selectedTool: action.payload,
        },
      };
    default:
      return state;
  }
};

export default actionReducer;