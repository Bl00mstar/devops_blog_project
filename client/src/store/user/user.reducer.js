import userTypes from './user.types';

const initialState = {
  token: localStorage.getItem('token'),
  darkMode: false,
  isAuthenticated: null,
  isLoading: true,
  user: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_LOADING:
      return {
        ...state,
        isLoading: true,
        user: {
          ...state.user,
        },
      };

    case userTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.data,
      };
    case userTypes.FETCHED_USER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case userTypes.FETCHED_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        user: {
          name: action.payload,
        },
      };
    case userTypes.AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case userTypes.LOGIN_FAIL:
    case userTypes.LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: {
          name: '',
        },
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
