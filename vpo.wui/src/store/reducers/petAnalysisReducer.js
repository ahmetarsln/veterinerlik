import * as actionTypes from "../actions/actionTypes";

const initialState = {
  petAnalysiss: [],
  petAnalysis: {},
  loading: false,
  errors: {},
};

const petAnalysisReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PETANALYSIS:
      return { ...state, currentPetAnalysis: action.payload };
    case actionTypes.FETCH_PETANALYSISS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_PETANALYSISS_SUCCESS:
      return { ...state, petAnalysiss: action.payload };
    case actionTypes.FETCH_PETANALYSISS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_PETANALYSIS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_PETANALYSIS_SUCCESS:
      return { ...state, petAnalysis: action.payload };
    case actionTypes.FETCH_PETANALYSIS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_PETANALYSIS:
      return { ...state, petAnalysis: {} };
    case actionTypes.SAVE_PETANALYSIS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_PETANALYSIS_SUCCESS:
      return {
        ...state,
        petAnalysiss: [...state.petAnalysiss, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_PETANALYSIS_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_PETANALYSIS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_PETANALYSIS_SUCCESS: {
      const petAnalysis =Object.assign({}, action.payload);
      return {
        ...state,
        petAnalysiss: state.petAnalysiss.map((item) =>
          item.id === petAnalysis.id ? petAnalysis : item
        ),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_PETANALYSIS_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_PETANALYSIS_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        petAnalysiss: state.petAnalysiss.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_PETANALYSIS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_PETANALYSIS_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default petAnalysisReducer;
