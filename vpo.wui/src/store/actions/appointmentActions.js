import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeAppointment = (appointment) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_APPOİNTMENT, payload: appointment });
};

export const fetchAppointments = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_APPOİNTMENTS_REQUESTED });
  try {
    let url = "/appointments";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_APPOİNTMENTS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_APPOİNTMENTS_FAILED });
  }
};

export const fetchAppointment = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_APPOİNTMENT_REQUESTED });
  try {
    const response = await axios.get(`/appointments/${id}`);
    dispatch({
      type: actionTypes.FETCH_APPOİNTMENT_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_APPOİNTMENT_FAILED });
  }
};

export const newAppointment = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_APPOİNTMENT });
};

export const saveAppointment = (appointment) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_APPOİNTMENT_REQUESTED });
  try {
    const response = await axios.post(`/appointments`, appointment);
    dispatch({
      type: actionTypes.SAVE_APPOİNTMENT_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_APPOİNTMENT_FAILED });
  }
};

export const updateAppointment = (appointment) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_APPOİNTMENT_REQUESTED });
  try {
    const response = await axios.put(`/appointments/${appointment.id}`, appointment);
    dispatch({
      type: actionTypes.UPDATE_APPOİNTMENT_SUCCESS,
      payload: appointment,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_APPOİNTMENT_FAILED });
  }
};

export const deleteAppointment = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_APPOİNTMENT_REQUESTED });
  try {
    const response = await axios.delete(`/appointments/${id}`);
    dispatch({
      type: actionTypes.DELETE_APPOİNTMENT_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_APPOİNTMENT_FAILED });
  }
};
