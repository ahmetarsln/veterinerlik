import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changePetAnalysis = (petAnalysis) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_PETANALYSIS, payload: petAnalysis });
};

export const fetchPetAnalysiss = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PETANALYSISS_REQUESTED });
  try {
    let url = "/petAnalysiss";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_PETANALYSISS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_PETANALYSISS_FAILED });
  }
};

export const fetchPetAnalysis = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PETANALYSIS_REQUESTED });
  try {
    const response = await axios.get(`/petAnalysiss/${id}`);
    dispatch({
      type: actionTypes.FETCH_PETANALYSIS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_PETANALYSIS_FAILED });
  }
};

export const newPetAnalysis = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_PETANALYSIS });
};

export const savePetAnalysis = (petAnalysis) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_PETANALYSIS_REQUESTED });
  try {
    const response = await axios.post(`/petAnalysiss`, petAnalysis);
    dispatch({
      type: actionTypes.SAVE_PETANALYSIS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_PETANALYSIS_FAILED });
  }
};

export const updatePetAnalysis = (petAnalysis) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_PETANALYSIS_REQUESTED });
  try {
    const response = await axios.put(`/petAnalysiss/${petAnalysis.id}`, petAnalysis);
    dispatch({
      type: actionTypes.UPDATE_PETANALYSIS_SUCCESS,
      payload: petAnalysis,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_PETANALYSIS_FAILED });
  }
};

export const deletePetAnalysis = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_PETANALYSIS_REQUESTED });
  try {
    const response = await axios.delete(`/petAnalysiss/${id}`);
    dispatch({
      type: actionTypes.DELETE_PETANALYSIS_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_PETANALYSIS_FAILED });
  }
};
