import actionTypes from './action.types';

const initialState = {
  route: { title: 'DevOps Notes', path: 'home', site: false },
  path: {
    isLoading: true,
    selectedPath: '',
    title: 'DevOps Notes',
    content: [],
  },
  post: { postId: '', title: '' },
  history: { posts: [localStorage.getItem('history')] },
  menu: { active: '', darkMode: localStorage.getItem('mode') },
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_HISTORY:
      if (localStorage.getItem('history')) {
        let item = localStorage.getItem('history');
        localStorage.setItem('history', [item, action.payload]);
      } else {
        localStorage.setItem('history', [action.payload]);
      }
      let historyValues = localStorage.getItem('history');
      return {
        ...state,
        history: { posts: [historyValues] },
      };
    case actionTypes.SET_POST:
      return {
        ...state,
        post: {
          postId: action.payload.postId,
          title: action.payload.title,
        },
      };
    case actionTypes.LOAD_HOME:
    case actionTypes.LOAD_TITLE:
      return {
        ...state,
        post: { postId: '', title: '' },
        path: { ...state.path },
        route: {
          title: action.payload.title,
          path: action.payload.path,
          site: action.payload.site,
        },
      };
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
        post: { postId: '' },
        path: {
          selectedPath: action.payload,
          title: action.payload + ' posts',
          isLoading: true,
          content: [],
        },
      };
    case actionTypes.SET_PATH:
      return {
        ...state,
        path: {
          ...state.path,
          isLoading: false,
          content: action.payload,
        },
      };
    case actionTypes.MENU_SET_ACTIVE:
      return {
        ...state,
        menu: { ...state.menu, active: action.payload },
      };
    case actionTypes.SET_THEME_MODE:
      localStorage.setItem('mode', action.payload);
      return {
        ...state,
        menu: { ...state.menu, darkMode: action.payload },
      };
    default:
      return state;
  }
};

export default actionReducer;
