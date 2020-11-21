import { SET_PRODUCT_DATA } from "../actionsTypes";
import { fetchRequest, fetchSuccess, fetchError } from "./../main/mainActions";
import axiosOrder from "./../../axiosOrder";
import { push } from "connected-react-router";

const setData = (data) => {
  return {
    type: SET_PRODUCT_DATA,
    data,
  };
};

export const deleteProductData = (id) => {
  return async (dispatch, getState) => {
    dispatch(fetchRequest());
    try {
      const headers = {
        Authorization: getState().user.user?.token,
      };
      await axiosOrder.post("/products/delete", { id }, { headers });
      dispatch(push("/"));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error.response?.data));
    }
  };
};

export const getProductData = (query = "") => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axiosOrder.get("/products" + query);
      dispatch(setData(response.data));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error.response?.data));
    }
  };
};

export const postProductData = (data) => {
  return async (dispatch, getState) => {
    dispatch(fetchRequest());
    try {
      const headers = {
        Authorization: getState().user.user?.token,
      };
      await axiosOrder.post("/products", data, { headers });
      dispatch(push("/"));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error.response?.data));
    }
  };
};
