import * as actionTypes from "../actions/actionTypes";

const initialState = {
  reports: [],
  report: {},
  loading: false,
  errors: {},
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_REPORT:
      return { ...state, currentReport: action.payload };
    case actionTypes.FETCH_REPORTS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_REPORTS_SUCCESS:
      return { ...state, reports: action.payload };
    case actionTypes.FETCH_REPORTS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_REPORT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_REPORT_SUCCESS:
      return { ...state, report: action.payload };
    case actionTypes.FETCH_REPORT_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_REPORT:
      return { ...state, report: {} };
    case actionTypes.SAVE_REPORT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_REPORT_SUCCESS:
      return {
        ...state,
        reports: [...state.reports, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_REPORT_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_REPORT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_REPORT_SUCCESS: {
      const report = Object.assign({}, action.payload);
      return {
        ...state,
        reports: state.reports.map((item) => (item.id === report.id ? report : item)),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_REPORT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_REPORT_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        reports: state.reports.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_REPORT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_REPORT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default reportReducer;
