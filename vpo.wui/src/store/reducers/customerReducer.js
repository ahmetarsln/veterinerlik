import * as actionTypes from "../actions/actionTypes";

const initialState = {
  customers: [],
  customer: {},
  loading: false,
  errors: {},
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CUSTOMER:
      return { ...state, currentCustomer: action.payload };
    case actionTypes.FETCH_CUSTOMERS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_CUSTOMERS_SUCCESS:
      return { ...state, customers: action.payload };
    case actionTypes.FETCH_CUSTOMERS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_CUSTOMER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_CUSTOMER_SUCCESS:
      return { ...state, customer: action.payload };
    case actionTypes.FETCH_CUSTOMER_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_CUSTOMER:
      return { ...state, customer: {} };
    case actionTypes.SAVE_CUSTOMER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: [...state.customers, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_CUSTOMER_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_CUSTOMER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_CUSTOMER_SUCCESS: {
      const customer =Object.assign({}, action.payload);
      return {
        ...state,
        customers: state.customers.map((item) =>
          item.id === customer.id ? customer : item
        ),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_CUSTOMER_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_CUSTOMER_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        customers: state.customers.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_CUSTOMER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_CUSTOMER_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default customerReducer;