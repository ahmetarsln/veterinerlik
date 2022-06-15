import * as actionTypes from "../actions/actionTypes";

const initialState = {
  measurementUnits: [],
  measurementUnit: {},
  loading: false,
  errors: {},
};

const measurementUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_MEASUREMENTUNIT:
      return { ...state, currentMeasurementUnit: action.payload };
    case actionTypes.FETCH_MEASUREMENTUNITS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_MEASUREMENTUNITS_SUCCESS:
      return { ...state, measurementUnits: action.payload };
    case actionTypes.FETCH_MEASUREMENTUNITS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_MEASUREMENTUNIT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_MEASUREMENTUNIT_SUCCESS:
      return { ...state, measurementUnit: action.payload };
    case actionTypes.FETCH_MEASUREMENTUNIT_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_MEASUREMENTUNIT:
      return { ...state, measurementUnit: {} };
    case actionTypes.SAVE_MEASUREMENTUNIT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_MEASUREMENTUNIT_SUCCESS:
      return {
        ...state,
        measurementUnits: [...state.measurementUnits, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_MEASUREMENTUNIT_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_MEASUREMENTUNIT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_MEASUREMENTUNIT_SUCCESS: {
      const measurementUnit = Object.assign({}, action.payload);
      return {
        ...state,
        measurementUnits: state.measurementUnits.map((item) => (item.id === measurementUnit.id ? measurementUnit : item)),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_MEASUREMENTUNIT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_MEASUREMENTUNIT_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        measurementUnits: state.measurementUnits.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_MEASUREMENTUNIT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_MEASUREMENTUNIT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default measurementUnitReducer;
