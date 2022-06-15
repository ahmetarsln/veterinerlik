import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeReport = (report) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_REPORT, payload: report });
};

export const fetchReports = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_REPORTS_REQUESTED });
  try {
    let url = "/reports";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_REPORTS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_REPORTS_FAILED });
  }
};

export const fetchReport = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_REPORT_REQUESTED });
  try {
    const response = await axios.get(`/reports/${id}`);
    dispatch({
      type: actionTypes.FETCH_REPORT_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_REPORT_FAILED });
  }
};

export const newReport = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_REPORT });
};

export const saveReport = (report) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_REPORT_REQUESTED });
  try {
    const response = await axios.post(`/reports`, report);
    dispatch({
      type: actionTypes.SAVE_REPORT_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_REPORT_FAILED });
  }
};

export const updateReport = (report) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_REPORT_REQUESTED });
  try {
    const response = await axios.put(`/reports/${report.id}`, report);
    dispatch({
      type: actionTypes.UPDATE_REPORT_SUCCESS,
      payload: report,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_REPORT_FAILED });
  }
};

export const deleteReport = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_REPORT_REQUESTED });
  try {
    const response = await axios.delete(`/reports/${id}`);
    dispatch({
      type: actionTypes.DELETE_REPORT_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_REPORT_FAILED });
  }
};
