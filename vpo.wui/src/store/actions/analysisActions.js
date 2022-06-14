import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeAnalysis = (analysis) => (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_ANALYSIS, payload: analysis });
};

export const fetchAnalysiss = () => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ANALYSISS_REQUESTED });
    try {
        let url = "/analysiss";

        const response = await axios.get(url);
        dispatch({
            type: actionTypes.FETCH_ANALYSISS_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.FETCH_ANALYSISS_FAILED });
    }
};

export const fetchAnalysis = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ANALYSIS_REQUESTED });
    try {
        const response = await axios.get(`/analysiss/${id}`);
        dispatch({
            type: actionTypes.FETCH_ANALYSIS_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.FETCH_ANALYSIS_FAILED });
    }
};

export const newAnalysis = () => async (dispatch) => {
    dispatch({ type: actionTypes.NEW_ANALYSIS });
};

export const saveAnalysis = (analysis) => async (dispatch) => {
    dispatch({ type: actionTypes.SAVE_ANALYSIS_REQUESTED });
    try {
        const response = await axios.post(`/analysiss`, analysis);
        dispatch({
            type: actionTypes.SAVE_ANALYSIS_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.SAVE_ANALYSIS_FAILED });
    }
};

export const updateAnalysis = (analysis) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ANALYSIS_REQUESTED });
    try {
        const response = await axios.put(`/analysiss/${analysis.id}`, analysis);
        dispatch({
            type: actionTypes.UPDATE_ANALYSIS_SUCCESS,
            payload: analysis,
        });
    } catch {
        dispatch({ type: actionTypes.UPDATE_ANALYSIS_FAILED });
    }
};

export const deleteAnalysis = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_ANALYSIS_REQUESTED });
    try {
        const response = await axios.delete(`/analysiss/${id}`);
        dispatch({
            type: actionTypes.DELETE_ANALYSIS_SUCCESS,
            payload: id,
        });
    } catch {
        dispatch({ type: actionTypes.DELETE_ANALYSIS_FAILED });
    }
};
