import * as actionTypes from "../actions/actionTypes";

const initialState = {
    analysiss: [],
    analysis: {},
    loading: false,
    errors: {},
};

const analysisReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ANALYSIS:
            return { ...state, currentRole: action.payload };
        case actionTypes.FETCH_ANALYSISS_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_ANALYSISS_SUCCESS:
            return { ...state, analysiss: action.payload };
        case actionTypes.FETCH_ANALYSISS_FAILED:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.FETCH_ANALYSIS_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_ANALYSIS_SUCCESS:
            return { ...state, analysis: action.payload };
        case actionTypes.FETCH_ANALYSIS_FAILED:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.NEW_ANALYSIS:
            return { ...state, analysis: {} };
        case actionTypes.SAVE_ANALYSIS_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.SAVE_ANALYSIS_SUCCESS:
            return {
                ...state,
                analysiss: [...state.analysiss, action.payload],
                errors: {},
                loading: false,
            };
        case actionTypes.SAVE_ANALYSIS_FAILED:
            return { ...state, errors: action.payload.data, loading: false };
        case actionTypes.UPDATE_ANALYSIS_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.UPDATE_ANALYSIS_SUCCESS: {
            const analysis = Object.assign({}, action.payload);
            return {
                ...state,
                analysiss: state.analysiss.map((item) =>
                    item.id === analysis.id ? analysis : item
                ),
                errors: {},
                loading: false,
            };
        }
        case actionTypes.UPDATE_ANALYSIS_FAILED:
            return { ...state, errors: action.payload, loading: false };

        case actionTypes.DELETE_ANALYSIS_SUCCESS: {
            const id = action.payload;
            return {
                ...state,
                analysiss: state.analysiss.filter((item) => item.id !== id),
            };
        }
        case actionTypes.DELETE_ANALYSIS_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.DELETE_ANALYSIS_FAILED:
            return { ...state, errors: action.payload, loading: false };

        default:
            return state;
    }
};

export default analysisReducer;