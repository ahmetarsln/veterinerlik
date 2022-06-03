import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeClinicalInformation = (clinicalInformation) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_CLINICALINFORMATION, payload: clinicalInformation });
};

export const fetchClinicalInformations = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_CLINICALINFORMATIONS_REQUESTED });
  try {
    let url = "/clinicalInformations";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_CLINICALINFORMATIONS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_CLINICALINFORMATIONS_FAILED });
  }
};

export const fetchClinicalInformation = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_CLINICALINFORMATION_REQUESTED });
  try {
    const response = await axios.get(`/clinicalInformations/${id}`);
    dispatch({
      type: actionTypes.FETCH_CLINICALINFORMATION_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_CLINICALINFORMATION_FAILED });
  }
};

export const newClinicalInformation = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_CLINICALINFORMATION });
};

export const saveClinicalInformation = (clinicalInformation) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_CLINICALINFORMATION_REQUESTED });
  try {
    const response = await axios.post(`/clinicalInformations`, clinicalInformation);
    dispatch({
      type: actionTypes.SAVE_CLINICALINFORMATION_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_CLINICALINFORMATION_FAILED });
  }
};

export const updateClinicalInformation = (clinicalInformation) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_CLINICALINFORMATION_REQUESTED });
  try {
    const response = await axios.put(`/clinicalInformations/${clinicalInformation.id}`, clinicalInformation);
    dispatch({
      type: actionTypes.UPDATE_CLINICALINFORMATION_SUCCESS,
      payload: clinicalInformation,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_CLINICALINFORMATION_FAILED });
  }
};

export const deleteClinicalInformation = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_CLINICALINFORMATION_REQUESTED });
  try {
    const response = await axios.delete(`/clinicalInformations/${id}`);
    dispatch({
      type: actionTypes.DELETE_CLINICALINFORMATION_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_CLINICALINFORMATION_FAILED });
  }
};
