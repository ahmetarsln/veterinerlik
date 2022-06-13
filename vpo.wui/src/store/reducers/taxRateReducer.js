import * as actionTypes from "../actions/actionTypes";

const initialState = {
    taxRates: [],
    taxRate: {},
    loading: false,
    errors: {},
};

const taxRateReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TAXRATE:
            return { ...state, currentTaxRate: action.payload };
        case actionTypes.FETCH_TAXRATES_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_TAXRATES_SUCCESS:
            return { ...state, taxRates: action.payload };
        case actionTypes.FETCH_TAXRATES_FAILED:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.FETCH_TAXRATE_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_TAXRATE_SUCCESS:
            return { ...state, taxRate: action.payload };
        case actionTypes.FETCH_TAXRATE_FAILED:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.NEW_TAXRATE:
            return { ...state, taxRate: {} };
        case actionTypes.SAVE_TAXRATE_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.SAVE_TAXRATE_SUCCESS:
            return {
                ...state,
                taxRates: [...state.taxRates, action.payload],
                errors: {},
                loading: false,
            };
        case actionTypes.SAVE_TAXRATE_FAILED:
            return { ...state, errors: action.payload, loading: false };
        case actionTypes.UPDATE_TAXRATE_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.UPDATE_TAXRATE_SUCCESS: {
            const taxRate = Object.assign({}, action.payload);
            return {
                ...state,
                taxRates: state.taxRates.map((item) =>
                    item.id === taxRate.id ? taxRate : item
                ),
                errors: {},
                loading: false,
            };
        }
        case actionTypes.UPDATE_TAXRATE_FAILED:
            return { ...state, errors: action.payload, loading: false };

        case actionTypes.DELETE_TAXRATE_SUCCESS: {
            const id = action.payload;
            return {
                ...state,
                taxRates: state.taxRates.filter((item) => item.id !== id),
            };
        }
        case actionTypes.DELETE_TAXRATE_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.DELETE_TAXRATE_FAILED:
            return { ...state, errors: action.payload, loading: false };

        default:
            return state;
    }
};

export default taxRateReducer;