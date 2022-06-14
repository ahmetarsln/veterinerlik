import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeTaxRate = (taxRate) => (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_TAXRATE, payload: taxRate });
};

export const fetchTaxRates = () => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_TAXRATES_REQUESTED });
    try {
        let url = "/taxRates";

        const response = await axios.get(url);
        dispatch({
            type: actionTypes.FETCH_TAXRATES_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.FETCH_TAXRATES_FAILED });
    }
};

export const fetchTaxRate = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_TAXRATE_REQUESTED });
    try {
        const response = await axios.get(`/taxRates/${id}`);
        dispatch({
            type: actionTypes.FETCH_TAXRATE_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.FETCH_TAXRATE_FAILED });
    }
};

export const newTaxRate = () => async (dispatch) => {
    dispatch({ type: actionTypes.NEW_TAXRATE });
};

export const saveTaxRate = (taxRate) => async (dispatch) => {
    dispatch({ type: actionTypes.SAVE_TAXRATE_REQUESTED });
    try {
        const response = await axios.post(`/taxRates`, taxRate);
        dispatch({
            type: actionTypes.SAVE_TAXRATE_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.SAVE_TAXRATE_FAILED });
    }
};

export const updateTaxRate = (taxRate) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_TAXRATE_REQUESTED });
    try {
        const response = await axios.put(`/taxRates/${taxRate.id}`, taxRate);
        dispatch({
            type: actionTypes.UPDATE_TAXRATE_SUCCESS,
            payload: taxRate,
        });
    } catch {
        dispatch({ type: actionTypes.UPDATE_TAXRATE_FAILED });
    }
};

export const deleteTaxRate = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_TAXRATE_REQUESTED });
    try {
        const response = await axios.delete(`/taxRates/${id}`);
        dispatch({
            type: actionTypes.DELETE_TAXRATE_SUCCESS,
            payload: id,
        });
    } catch {
        dispatch({ type: actionTypes.DELETE_TAXRATE_FAILED });
    }
};