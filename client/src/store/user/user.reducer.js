const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: true,
  user: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true,
        user: {
          ...state.user,
        },
      };

    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.data,
      };
    case "FETCHED_USER_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      // console.log(action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "FETCHED_USER_FAIL":
      return {
        ...state,
        isLoading: false,
        user: {
          name: action.payload,
        },
      };
    case "AUTH_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "LOGIN_FAIL":
    case "LOGOUT_SUCCESS":
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: {
          name: "",
        },
        isAuthenticated: false,
        isLoading: false,
      };
    case "UPDATE_SETTINGS_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    case "UPDATE_SETTINGS_EMAIL":
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
