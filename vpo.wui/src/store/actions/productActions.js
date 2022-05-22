import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeProduct = (product) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_PRODUCT, payload: product });
};

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_REQUESTED });
  try {
    let url = "/products";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_PRODUCTS_FAILED });
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCT_REQUESTED });
  try {
    const response = await axios.get(`/products/${id}`);
    dispatch({
      type: actionTypes.FETCH_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_PRODUCT_FAILED });
  }
};

export const newProduct = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_PRODUCT });
};

export const saveProduct = (product) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_PRODUCT_REQUESTED });
  try {
    const response = await axios.post(`/products`, product);
    dispatch({
      type: actionTypes.SAVE_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_PRODUCT_FAILED });
  }
};

export const updateProduct = (product) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_PRODUCT_REQUESTED });
  try {
    const response = await axios.put(`/products/${product.id}`, product);
    dispatch({
      type: actionTypes.UPDATE_PRODUCT_SUCCESS,
      payload: product,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_PRODUCT_FAILED });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_PRODUCT_REQUESTED });
  try {
    const response = await axios.delete(`/products/${id}`);
    dispatch({
      type: actionTypes.DELETE_PRODUCT_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_PRODUCT_FAILED });
  }
};
