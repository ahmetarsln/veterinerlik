import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changeRole = (role) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_ROLE, payload: role });
};

export const fetchRoles = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ROLES_REQUESTED });
  try {
    let url = "/roles";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_ROLES_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_ROLES_FAILED });
  }
};

export const fetchRole = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ROLE_REQUESTED });
  try {
    const response = await axios.get(`/roles/${id}`);
    dispatch({
      type: actionTypes.FETCH_ROLE_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_ROLE_FAILED });
  }
};

export const newRole = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_ROLE });
};

export const saveRole = (role) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_ROLE_REQUESTED });
  try {
    const response = await axios.post(`/roles`, role);
    dispatch({
      type: actionTypes.SAVE_ROLE_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_ROLE_FAILED });
  }
};

export const updateRole = (role) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_ROLE_REQUESTED });
  try {
    const response = await axios.put(`/roles/${role.id}`, role);
    dispatch({
      type: actionTypes.UPDATE_ROLE_SUCCESS,
      payload: role,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_ROLE_FAILED });
  }
};

export const deleteRole = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_ROLE_REQUESTED });
  try {
    const response = await axios.delete(`/roles/${id}`);
    dispatch({
      type: actionTypes.DELETE_ROLE_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_ROLE_FAILED });
  }
};
