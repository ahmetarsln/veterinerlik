import * as actionTypes from "../actions/actionTypes";

const initialState = {
    parameters: [],
    parameter: {},
    loading: false,
    errors: {},
};

const parameterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PARAMETER:
            return { ...state, currentParameter: action.payload };
        case actionTypes.FETCH_PARAMETERS_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_PARAMETERS_SUCCESS:
            return { ...state, parameters: action.payload };
        case actionTypes.FETCH_PARAMETERS_FAILED:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.FETCH_PARAMETER_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_PARAMETER_SUCCESS:
            return { ...state, parameter: action.payload };
        case actionTypes.FETCH_PARAMETER_FAILED:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.NEW_PARAMETER:
            return { ...state, parameter: {} };
        case actionTypes.SAVE_PARAMETER_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.SAVE_PARAMETER_SUCCESS:
            return {
                ...state,
                parameters: [...state.parameters, action.payload],
                errors: {},
                loading: false,
            };
        case actionTypes.SAVE_PARAMETER_FAILED:
            return { ...state, errors: action.payload, loading: false };
        case actionTypes.UPDATE_PARAMETER_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.UPDATE_PARAMETER_SUCCESS: {
            const parameter = Object.assign({}, action.payload);
            return {
                ...state,
                parameters: state.parameters.map((item) =>
                    item.id === parameter.id ? parameter : item
                ),
                errors: {},
                loading: false,
            };
        }
        case actionTypes.UPDATE_PARAMETER_FAILED:
            return { ...state, errors: action.payload, loading: false };

        case actionTypes.DELETE_PARAMETER_SUCCESS: {
            const id = action.payload;
            return {
                ...state,
                parameters: state.parameters.filter((item) => item.id !== id),
            };
        }
        case actionTypes.DELETE_PARAMETER_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.DELETE_PARAMETER_FAILED:
            return { ...state, errors: action.payload, loading: false };

        default:
            return state;
    }
};

export default parameterReducer;