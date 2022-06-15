import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currencyUnits: [],
  currencyUnit: {},
  loading: false,
  errors: {},
};

const currencyUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENCYUNIT:
      return { ...state, currentCurrencyUnit: action.payload };
    case actionTypes.FETCH_CURRENCYUNITS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_CURRENCYUNITS_SUCCESS:
      return { ...state, currencyUnits: action.payload };
    case actionTypes.FETCH_CURRENCYUNITS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_CURRENCYUNIT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_CURRENCYUNIT_SUCCESS:
      return { ...state, currencyUnit: action.payload };
    case actionTypes.FETCH_CURRENCYUNIT_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_CURRENCYUNIT:
      return { ...state, currencyUnit: {} };
    case actionTypes.SAVE_CURRENCYUNIT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_CURRENCYUNIT_SUCCESS:
      return {
        ...state,
        currencyUnits: [...state.currencyUnits, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_CURRENCYUNIT_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_CURRENCYUNIT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_CURRENCYUNIT_SUCCESS: {
      const currencyUnit =Object.assign({}, action.payload);
      return {
        ...state,
        currencyUnits: state.currencyUnits.map((item) =>
          item.id === currencyUnit.id ? currencyUnit : item
        ),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_CURRENCYUNIT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_CURRENCYUNIT_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        currencyUnits: state.currencyUnits.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_CURRENCYUNIT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_CURRENCYUNIT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default currencyUnitReducer;
