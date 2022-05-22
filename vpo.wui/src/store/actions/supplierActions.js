import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeSupplier = (supplier) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_SUPPLIER, payload: supplier });
};

export const fetchSuppliers = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_SUPPLIERS_REQUESTED });
  try {
    let url = "/suppliers";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_SUPPLIERS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_SUPPLIERS_FAILED });
  }
};

export const fetchSupplier = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_SUPPLIER_REQUESTED });
  try {
    const response = await axios.get(`/suppliers/${id}`);
    dispatch({
      type: actionTypes.FETCH_SUPPLIER_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_SUPPLIER_FAILED });
  }
};

export const newSupplier = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_SUPPLIER });
};

export const saveSupplier = (supplier) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_SUPPLIER_REQUESTED });
  try {
    const response = await axios.post(`/suppliers`, supplier);
    dispatch({
      type: actionTypes.SAVE_SUPPLIER_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_SUPPLIER_FAILED });
  }
};

export const updateSupplier = (supplier) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_SUPPLIER_REQUESTED });
  try {
    const response = await axios.put(`/suppliers/${supplier.id}`, supplier);
    dispatch({
      type: actionTypes.UPDATE_SUPPLIER_SUCCESS,
      payload: supplier,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_SUPPLIER_FAILED });
  }
};

export const deleteSupplier = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_SUPPLIER_REQUESTED });
  try {
    const response = await axios.delete(`/suppliers/${id}`);
    dispatch({
      type: actionTypes.DELETE_SUPPLIER_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_SUPPLIER_FAILED });
  }
};