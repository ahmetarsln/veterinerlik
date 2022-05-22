import * as actionTypes from "../actions/actionTypes";

const initialState = {
  pets: [],
  pet: {},
  loading: false,
  errors: {},
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PET:
      return { ...state, currentPet: action.payload };
    case actionTypes.FETCH_PETS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_PETS_SUCCESS:
      return { ...state, pets: action.payload };
    case actionTypes.FETCH_PETS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_PET_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_PET_SUCCESS:
      return { ...state, pet: action.payload };
    case actionTypes.FETCH_PET_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_PET:
      return { ...state, pet: {} };
    case actionTypes.SAVE_PET_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_PET_SUCCESS:
      return {
        ...state,
        pets: [...state.pets, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_PET_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_PET_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_PET_SUCCESS: {
      const pet =Object.assign({}, action.payload);
      return {
        ...state,
        pets: state.pets.map((item) =>
          item.id === pet.id ? pet : item
        ),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_PET_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_PET_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        pets: state.pets.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_PET_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_PET_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default petReducer;
