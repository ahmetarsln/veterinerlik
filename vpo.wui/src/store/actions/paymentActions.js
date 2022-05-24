import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changePayment = (payment) => (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_PAYMENT, payload: payment });
};

export const fetchPayments = () => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PAYMENTS_REQUESTED });
    try {
        let url = "/payments";

        const response = await axios.get(url);
        dispatch({
            type: actionTypes.FETCH_PAYMENTS_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.FETCH_PAYMENTS_FAILED });
    }
};

export const fetchPayment = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PAYMENT_REQUESTED });
    try {
        const response = await axios.get(`/payments/${id}`);
        dispatch({
            type: actionTypes.FETCH_PAYMENT_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.FETCH_PAYMENT_FAILED });
    }
};

export const newPayment = () => async (dispatch) => {
    dispatch({ type: actionTypes.NEW_PAYMENT });
};

export const savePayment = (payment) => async (dispatch) => {
    dispatch({ type: actionTypes.SAVE_PAYMENT_REQUESTED });
    try {
        const response = await axios.post(`/payments`, payment);
        dispatch({
            type: actionTypes.SAVE_PAYMENT_SUCCESS,
            payload: response.data,
        });
    } catch {
        dispatch({ type: actionTypes.SAVE_PAYMENT_FAILED });
    }
};

export const updatePayment = (payment) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_PAYMENT_REQUESTED });
    try {
        const response = await axios.put(`/payments/${payment.id}`, payment);
        dispatch({
            type: actionTypes.UPDATE_PAYMENT_SUCCESS,
            payload: payment,
        });
    } catch {
        dispatch({ type: actionTypes.UPDATE_PAYMENT_FAILED });
    }
};

export const deletePayment = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_PAYMENT_REQUESTED });
    try {
        const response = await axios.delete(`/payments/${id}`);
        dispatch({
            type: actionTypes.DELETE_PAYMENT_SUCCESS,
            payload: id,
        });
    } catch {
        dispatch({ type: actionTypes.DELETE_PAYMENT_FAILED });
    }
};