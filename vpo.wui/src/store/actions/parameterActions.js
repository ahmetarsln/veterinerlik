import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeParameter = (parameter) => (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_PARAMETER, payload: parameter });
};

export const fetchParameters = () => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PARAMETERS_REQUESTED });
    try {
        let url = "/parameters";

        const response = await axios.get(url);
        dispatch({
            type: actionTypes.FETCH_PARAMETERS_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.FETCH_PARAMETERS_FAILED });
    }
};

export const fetchParameter = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PARAMETER_REQUESTED });
    try {
        const response = await axios.get(`/parameters/${id}`);
        dispatch({
            type: actionTypes.FETCH_PARAMETER_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.FETCH_PARAMETER_FAILED });
    }
};

export const newParameter = () => async (dispatch) => {
    dispatch({ type: actionTypes.NEW_PARAMETER });
};

export const saveParameter = (parameter) => async (dispatch) => {
    dispatch({ type: actionTypes.SAVE_PARAMETER_REQUESTED });
    try {
        const response = await axios.post(`/parameters`, parameter);
        dispatch({
            type: actionTypes.SAVE_PARAMETER_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.SAVE_PARAMETER_FAILED });
    }
};

export const updateParameter = (parameter) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_PARAMETER_REQUESTED });
    try {
        const response = await axios.put(`/parameters/${parameter.id}`, parameter);
        dispatch({
            type: actionTypes.UPDATE_PARAMETER_SUCCESS,
            payload: parameter,
        });
    } catch {
        dispatch({ type: actionTypes.UPDATE_PARAMETER_FAILED });
    }
};

export const deleteParameter = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_PARAMETER_REQUESTED });
    try {
        const response = await axios.delete(`/parameters/${id}`);
        dispatch({
            type: actionTypes.DELETE_PARAMETER_SUCCESS,
            payload: id,
        });
    } catch {
        dispatch({ type: actionTypes.DELETE_PARAMETER_FAILED });
    }
};