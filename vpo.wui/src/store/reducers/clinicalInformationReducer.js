import * as actionTypes from "../actions/actionTypes";

const initialState = {
  clinicalInformations: [],
  clinicalInformation: {},
  loading: false,
  errors: {},
};

const clinicalInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CLINICALINFORMATION:
      return { ...state, currentClinicalInformation: action.payload };
    case actionTypes.FETCH_CLINICALINFORMATIONS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_CLINICALINFORMATIONS_SUCCESS:
      return { ...state, clinicalInformations: action.payload };
    case actionTypes.FETCH_CLINICALINFORMATIONS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_CLINICALINFORMATION_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_CLINICALINFORMATION_SUCCESS:
      return { ...state, clinicalInformation: action.payload };
    case actionTypes.FETCH_CLINICALINFORMATION_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_CLINICALINFORMATION:
      return { ...state, clinicalInformation: {} };
    case actionTypes.SAVE_CLINICALINFORMATION_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_CLINICALINFORMATION_SUCCESS:
      return {
        ...state,
        clinicalInformations: [...state.clinicalInformations, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_CLINICALINFORMATION_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_CLINICALINFORMATION_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_CLINICALINFORMATION_SUCCESS: {
      const clinicalInformation = Object.assign({}, action.payload);
      return {
        ...state,
        clinicalInformations: state.clinicalInformations.map((item) => (item.id === clinicalInformation.id ? clinicalInformation : item)),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_CLINICALINFORMATION_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_CLINICALINFORMATION_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        clinicalInformations: state.clinicalInformations.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_CLINICALINFORMATION_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_CLINICALINFORMATION_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default clinicalInformationReducer;
