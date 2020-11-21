import { SET_CATEGORY_DATA } from "../actionsTypes";
import { fetchRequest, fetchSuccess, fetchError } from "./../main/mainActions";
import axiosOrder from "./../../axiosOrder";

const setData = (data) => {
  return {
    type: SET_CATEGORY_DATA,
    data,
  };
};

export const getCategoryData = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axiosOrder.get("/categories");
      dispatch(setData(response.data));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error.response?.data));
    }
  };
};
