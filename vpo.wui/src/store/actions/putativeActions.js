import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changePutative = (putative) => (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_PUTATIVE, payload: putative });
};

export const fetchPutatives = () => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PUTATIVES_REQUESTED });
    try {
        let url = "/putatives";

        const response = await axios.get(url);
        dispatch({
            type: actionTypes.FETCH_PUTATIVES_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.FETCH_PUTATIVES_FAILED });
    }
};

export const fetchPutative = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PUTATIVE_REQUESTED });
    try {
        const response = await axios.get(`/putatives/${id}`);
        dispatch({
            type: actionTypes.FETCH_PUTATIVE_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.FETCH_PUTATIVE_FAILED });
    }
};

export const newPutative = () => async (dispatch) => {
    dispatch({ type: actionTypes.NEW_PUTATIVE });
};

export const savePutative = (putative) => async (dispatch) => {
    dispatch({ type: actionTypes.SAVE_PUTATIVE_REQUESTED });
    try {
        const response = await axios.post(`/putatives`, putative);
        dispatch({
            type: actionTypes.SAVE_PUTATIVE_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.SAVE_PUTATIVE_FAILED });
    }
};

export const updatePutative = (putative) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_PUTATIVE_REQUESTED });
    try {
        const response = await axios.put(`/putatives/${putative.id}`, putative);
        dispatch({
            type: actionTypes.UPDATE_PUTATIVE_SUCCESS,
            payload: putative,
        });
    } catch {
        dispatch({ type: actionTypes.UPDATE_PUTATIVE_FAILED });
    }
};

export const deletePutative = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_PUTATIVE_REQUESTED });
    try {
        const response = await axios.delete(`/putatives/${id}`);
        dispatch({
            type: actionTypes.DELETE_PUTATIVE_SUCCESS,
            payload: id,
        });
    } catch {
        dispatch({ type: actionTypes.DELETE_PUTATIVE_FAILED });
    }
};