import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeProductCategory = (productCategory) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_PRODUCTCATEGORIES, payload: productCategory });
};

export const fetchProductCategories = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTCATEGORIES_REQUESTED });
  try {
    let url = "/productCategories";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_PRODUCTCATEGORIES_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_PRODUCTCATEGORIES_FAILED });
  }
};

export const fetchProductCategory = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTCATEGORIES_REQUESTED });
  try {
    const response = await axios.get(`/productCategories/${id}`);
    dispatch({
      type: actionTypes.FETCH_PRODUCTCATEGORIES_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_PRODUCTCATEGORIES_FAILED });
  }
};

export const newProductCategory = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_PRODUCTCATEGORIES });
};

export const saveProductCategory = (productCategory) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_PRODUCTCATEGORIES_REQUESTED });
  try {
    const response = await axios.post(`/productCategories`, productCategory);
    dispatch({
      type: actionTypes.SAVE_PRODUCTCATEGORIES_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_PRODUCTCATEGORIES_FAILED });
  }
};

export const updateProductCategory = (productCategory) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_PRODUCTCATEGORIES_REQUESTED });
  try {
    const response = await axios.put(`/productCategories/${productCategory.id}`, productCategory);
    dispatch({
      type: actionTypes.UPDATE_PRODUCTCATEGORIES_SUCCESS,
      payload: productCategory,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_PRODUCTCATEGORIES_FAILED });
  }
};

export const deleteProductCategory = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_PRODUCTCATEGORIES_REQUESTED });
  try {
    const response = await axios.delete(`/productCategories/${id}`);
    dispatch({
      type: actionTypes.DELETE_PRODUCTCATEGORIES_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_PRODUCTCATEGORIES_FAILED });
  }
};
