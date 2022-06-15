import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeCustomer = (customer) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_CUSTOMER, payload: customer });
};

export const fetchCustomers = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_CUSTOMERS_REQUESTED });
  try {
    let url = "/customers";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_CUSTOMERS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_CUSTOMERS_FAILED });
  }
};

export const fetchCustomer = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_CUSTOMER_REQUESTED });
  try {
    const response = await axios.get(`/customers/${id}`);
    dispatch({
      type: actionTypes.FETCH_CUSTOMER_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_CUSTOMER_FAILED });
  }
};

export const newCustomer = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_CUSTOMER });
};

export const saveCustomer = (customer) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_CUSTOMER_REQUESTED });
  try {
    const response = await axios.post(`/customers`, customer);
    dispatch({
      type: actionTypes.SAVE_CUSTOMER_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_CUSTOMER_FAILED });
  }
};

export const updateCustomer = (customer) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_CUSTOMER_REQUESTED });
  try {
    const response = await axios.put(`/customers/${customer.id}`, customer);
    dispatch({
      type: actionTypes.UPDATE_CUSTOMER_SUCCESS,
      payload: customer,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_CUSTOMER_FAILED });
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_CUSTOMER_REQUESTED });
  try {
    const response = await axios.delete(`/customers/${id}`);
    dispatch({
      type: actionTypes.DELETE_CUSTOMER_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_CUSTOMER_FAILED });
  }
};