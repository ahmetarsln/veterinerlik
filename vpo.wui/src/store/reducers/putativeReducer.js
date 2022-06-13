import * as actionTypes from "../actions/actionTypes";

const initialState = {
    putatives: [],
    putative: {},
    loading: false,
    errors: {},
};

const putativeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PUTATIVE:
            return { ...state, currentPutative: action.payload };
        case actionTypes.FETCH_PUTATIVES_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_PUTATIVES_SUCCESS:
            return { ...state, putatives: action.payload };
        case actionTypes.FETCH_PUTATIVES_FAILED:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.FETCH_PUTATIVE_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_PUTATIVE_SUCCESS:
            return { ...state, putative: action.payload };
        case actionTypes.FETCH_PUTATIVE_FAILED:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.NEW_PUTATIVE:
            return { ...state, putative: {} };
        case actionTypes.SAVE_PUTATIVE_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.SAVE_PUTATIVE_SUCCESS:
            return {
                ...state,
                putatives: [...state.putatives, action.payload],
                errors: {},
                loading: false,
            };
        case actionTypes.SAVE_PUTATIVE_FAILED:
            return { ...state, errors: action.payload, loading: false };
        case actionTypes.UPDATE_PUTATIVE_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.UPDATE_PUTATIVE_SUCCESS: {
            const putative = Object.assign({}, action.payload);
            return {
                ...state,
                putatives: state.putatives.map((item) =>
                    item.id === putative.id ? putative : item
                ),
                errors: {},
                loading: false,
            };
        }
        case actionTypes.UPDATE_PUTATIVE_FAILED:
            return { ...state, errors: action.payload, loading: false };

        case actionTypes.DELETE_PUTATIVE_SUCCESS: {
            const id = action.payload;
            return {
                ...state,
                putatives: state.putatives.filter((item) => item.id !== id),
            };
        }
        case actionTypes.DELETE_PUTATIVE_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.DELETE_PUTATIVE_FAILED:
            return { ...state, errors: action.payload, loading: false };

        default:
            return state;
    }
};

export default putativeReducer;