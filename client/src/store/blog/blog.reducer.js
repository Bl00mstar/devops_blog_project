import blogTypes from "./blog.types";

const initialState = {
  topics: { isLoading: false, topicsData: [], tools: [] },
  posts: { isLoading: false, postsData: [] },
  tools: { isLoading: false, toolsData: [] },
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case blogTypes.TOOLS_LOADING:
      return {
        ...state,
        tools: {
          isLoading: true,
          toolsData: [],
        },
      };
    case blogTypes.TOOLS_LOADED:
      return {
        ...state,
        tools: {
          isLoading: false,
          toolsData: action.payload,
        },
      };
    case blogTypes.POSTS_LOADING:
      return {
        ...state,
        posts: {
          isLoading: true,
          postsData: [],
        },
      };
    case blogTypes.POSTS_LOADED:
      return {
        ...state,
        posts: {
          isLoading: false,
          postsData: action.payload,
        },
      };
    case blogTypes.TOPICS_LOADED:
      return {
        ...state,
        topics: {
          ...state.topics,
          topicsData: action.payload,
        },
      };
    case blogTypes.TOPICS_TOOLS_LOADING:
      return {
        ...state,
        topics: {
          ...state.topics,
          isLoading: true,
          tools: [],
        },
      };
    case blogTypes.TOPICS_TOOLS_LOADED:
      return {
        ...state,
        topics: {
          ...state.topics,
          isLoading: false,
          tools: action.payload,
        },
      };
    default:
      return state;
  }
};

export default blogReducer;
