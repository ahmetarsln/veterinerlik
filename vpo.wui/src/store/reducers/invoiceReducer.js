import * as actionTypes from "../actions/actionTypes";

const initialState = {
  invoices: [],
  invoice: {},
  loading: false,
  errors: {},
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INVOICE:
      return { ...state, currentInvoice: action.payload };
    case actionTypes.FETCH_INVOICES_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_INVOICES_SUCCESS:
      return { ...state, invoices: action.payload };
    case actionTypes.FETCH_INVOICES_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_INVOICE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_INVOICE_SUCCESS:
      return { ...state, invoice: action.payload };
    case actionTypes.FETCH_INVOICE_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_INVOICE:
      return { ...state, invoice: {} };
    case actionTypes.SAVE_INVOICE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_INVOICE_SUCCESS:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_INVOICE_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_INVOICE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_INVOICE_SUCCESS: {
      const invoice = Object.assign({}, action.payload);
      return {
        ...state,
        invoices: state.invoices.map((item) => (item.id === invoice.id ? invoice : item)),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_INVOICE_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_INVOICE_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        invoices: state.invoices.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_INVOICE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_INVOICE_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default invoiceReducer;
