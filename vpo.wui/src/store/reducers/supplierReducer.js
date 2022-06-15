import * as actionTypes from "../actions/actionTypes";

const initialState = {
  suppliers: [],
  supplier: {},
  loading: false,
  errors: {},
};

const supplierReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SUPPLIER:
      return { ...state, currentSupplier: action.payload };
    case actionTypes.FETCH_SUPPLIERS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_SUPPLIERS_SUCCESS:
      return { ...state, suppliers: action.payload };
    case actionTypes.FETCH_SUPPLIERS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_SUPPLIER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_SUPPLIER_SUCCESS:
      return { ...state, supplier: action.payload };
    case actionTypes.FETCH_SUPPLIER_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_SUPPLIER:
      return { ...state, supplier: {} };
    case actionTypes.SAVE_SUPPLIER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_SUPPLIER_SUCCESS:
      return {
        ...state,
        suppliers: [...state.suppliers, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_SUPPLIER_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_SUPPLIER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_SUPPLIER_SUCCESS: {
      const supplier =Object.assign({}, action.payload);
      return {
        ...state,
        suppliers: state.suppliers.map((item) =>
          item.id === supplier.id ? supplier : item
        ),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_SUPPLIER_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_SUPPLIER_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        suppliers: state.suppliers.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_SUPPLIER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_SUPPLIER_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default supplierReducer;