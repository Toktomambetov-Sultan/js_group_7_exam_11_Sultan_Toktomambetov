import { SET_PRODUCT_DATA } from "../actionsTypes";

const initialState = {
  data: [],
  currentProduct: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return { ...state };
  }
};

export default reducer;
