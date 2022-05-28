import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeMeasurementUnit = (measurementUnit) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_MEASUREMENTUNIT, payload: measurementUnit });
};

export const fetchMeasurementUnits = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_MEASUREMENTUNITS_REQUESTED });
  try {
    let url = "/measurementUnits";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_MEASUREMENTUNITS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_MEASUREMENTUNITS_FAILED });
  }
};

export const fetchMeasurementUnit = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_MEASUREMENTUNIT_REQUESTED });
  try {
    const response = await axios.get(`/measurementUnits/${id}`);
    dispatch({
      type: actionTypes.FETCH_MEASUREMENTUNIT_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_MEASUREMENTUNIT_FAILED });
  }
};

export const newMeasurementUnit = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_MEASUREMENTUNIT });
};

export const saveMeasurementUnit = (measurementUnit) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_MEASUREMENTUNIT_REQUESTED });
  try {
    const response = await axios.post(`/measurementUnits`, measurementUnit);
    dispatch({
      type: actionTypes.SAVE_MEASUREMENTUNIT_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_MEASUREMENTUNIT_FAILED });
  }
};

export const updateMeasurementUnit = (measurementUnit) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_MEASUREMENTUNIT_REQUESTED });
  try {
    const response = await axios.put(`/measurementUnits/${measurementUnit.id}`, measurementUnit);
    dispatch({
      type: actionTypes.UPDATE_MEASUREMENTUNIT_SUCCESS,
      payload: measurementUnit,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_MEASUREMENTUNIT_FAILED });
  }
};

export const deleteMeasurementUnit = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_MEASUREMENTUNIT_REQUESTED });
  try {
    const response = await axios.delete(`/measurementUnits/${id}`);
    dispatch({
      type: actionTypes.DELETE_MEASUREMENTUNIT_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_MEASUREMENTUNIT_FAILED });
  }
};
