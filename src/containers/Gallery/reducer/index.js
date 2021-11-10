const initialState = {
  loading: false,
  error: false,
  errorMessage: undefined,
  pictures: [],
  searchString: undefined,
  totalPage: 0,
  notFound: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch':
      return {...state, loading: true};
    case 'fetch_success':
      const newState = {
        ...state,
        loading: false,
        pictures: action.pictures,
      };
      if (action.searchString) {
        newState.searchString = action.searchString;
      }
      if (action.totalPage) {
        newState.totalPage = action.totalPage;
      }
      return newState;
    case 'fetch_error':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.errorMessage,
      };
    case 'fetch_not_found':
      return {
        ...state,
        loading: false,
        notFound: true,
      };
    case 'reset_not_found':
      return {
        ...state,
        notFound: initialState.notFound,
      };
    case 'fetch_error':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.errorMessage,
      };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
};

export {initialState, reducer};
