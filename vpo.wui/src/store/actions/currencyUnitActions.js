import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeCurrencyUnit = (currencyUnit) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_CURRENCYUNIT, payload: currencyUnit });
};

export const fetchCurrencyUnits = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_CURRENCYUNITS_REQUESTED });
  try {
    let url = "/currencyUnits";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_CURRENCYUNITS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_CURRENCYUNITS_FAILED });
  }
};

export const fetchCurrencyUnit = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_CURRENCYUNIT_REQUESTED });
  try {
    const response = await axios.get(`/currencyUnits/${id}`);
    dispatch({
      type: actionTypes.FETCH_CURRENCYUNIT_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_CURRENCYUNIT_FAILED });
  }
};

export const newCurrencyUnit = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_CURRENCYUNIT });
};

export const saveCurrencyUnit = (currencyUnit) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_CURRENCYUNIT_REQUESTED });
  try {
    const response = await axios.post(`/currencyUnits`, currencyUnit);
    dispatch({
      type: actionTypes.SAVE_CURRENCYUNIT_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_CURRENCYUNIT_FAILED });
  }
};

export const updateCurrencyUnit = (currencyUnit) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_CURRENCYUNIT_REQUESTED });
  try {
    const response = await axios.put(`/currencyUnits/${currencyUnit.id}`, currencyUnit);
    dispatch({
      type: actionTypes.UPDATE_CURRENCYUNIT_SUCCESS,
      payload: currencyUnit,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_CURRENCYUNIT_FAILED });
  }
};

export const deleteCurrencyUnit = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_CURRENCYUNIT_REQUESTED });
  try {
    const response = await axios.delete(`/currencyUnits/${id}`);
    dispatch({
      type: actionTypes.DELETE_CURRENCYUNIT_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_CURRENCYUNIT_FAILED });
  }
};
