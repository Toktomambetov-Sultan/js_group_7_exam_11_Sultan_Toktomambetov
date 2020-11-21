const {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} = require("../actionsTypes");

const initialState = {
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case FETCH_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return { ...state };
  }
};
export default reducer;
