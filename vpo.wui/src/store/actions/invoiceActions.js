import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeInvoice = (invoice) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_INVOICE, payload: invoice });
};

export const fetchInvoices = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_INVOICES_REQUESTED });
  try {
    let url = "/invoices";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_INVOICES_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_INVOICES_FAILED });
  }
};

export const fetchInvoice = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_INVOICE_REQUESTED });
  try {
    const response = await axios.get(`/invoices/${id}`);
    dispatch({
      type: actionTypes.FETCH_INVOICE_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_INVOICE_FAILED });
  }
};

export const newInvoice = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_INVOICE });
};

export const saveInvoice = (invoice) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_INVOICE_REQUESTED });
  try {
    const response = await axios.post(`/invoices`, invoice);
    dispatch({
      type: actionTypes.SAVE_INVOICE_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_INVOICE_FAILED });
  }
};

export const updateInvoice = (invoice) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_INVOICE_REQUESTED });
  try {
    const response = await axios.put(`/invoices/${invoice.id}`, invoice);
    dispatch({
      type: actionTypes.UPDATE_INVOICE_SUCCESS,
      payload: invoice,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_INVOICE_FAILED });
  }
};

export const deleteInvoice = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_INVOICE_REQUESTED });
  try {
    const response = await axios.delete(`/invoices/${id}`);
    dispatch({
      type: actionTypes.DELETE_INVOICE_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_INVOICE_FAILED });
  }
};
