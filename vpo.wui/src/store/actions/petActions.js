import * as actionTypes from "./actionTypes";
import axios from "../../libs/vpoapi";

export const changePet = (pet) => (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_PET, payload: pet });
};

export const fetchPets = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PETS_REQUESTED });
  try {
    let url = "/pets";

    const response = await axios.get(url);
    dispatch({
      type: actionTypes.FETCH_PETS_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_PETS_FAILED });
  }
};

export const fetchPet = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PET_REQUESTED });
  try {
    const response = await axios.get(`/pets/${id}`);
    dispatch({
      type: actionTypes.FETCH_PET_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.FETCH_PET_FAILED });
  }
};

export const newPet = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEW_PET });
};

export const savePet = (pet) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_PET_REQUESTED });
  try {
    const response = await axios.post(`/pets`, pet);
    dispatch({
      type: actionTypes.SAVE_PET_SUCCESS,
      payload: response.data,
    });
  } catch {
    dispatch({ type: actionTypes.SAVE_PET_FAILED });
  }
};

export const updatePet = (pet) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_PET_REQUESTED });
  try {
    const response = await axios.put(`/pets/${pet.id}`, pet);
    dispatch({
      type: actionTypes.UPDATE_PET_SUCCESS,
      payload: pet,
    });
  } catch {
    dispatch({ type: actionTypes.UPDATE_PET_FAILED });
  }
};

export const deletePet = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_PET_REQUESTED });
  try {
    const response = await axios.delete(`/pets/${id}`);
    dispatch({
      type: actionTypes.DELETE_PET_SUCCESS,
      payload: id,
    });
  } catch {
    dispatch({ type: actionTypes.DELETE_PET_FAILED });
  }
};
