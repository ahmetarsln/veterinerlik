import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  product: {},
  loading: false,
  errors: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PRODUCT:
      return { ...state, currentProduct: action.payload };
    case actionTypes.FETCH_PRODUCTS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_PRODUCT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case actionTypes.FETCH_PRODUCT_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_PRODUCT:
      return { ...state, product: {} };
    case actionTypes.SAVE_PRODUCT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_PRODUCT_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_PRODUCT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_PRODUCT_SUCCESS: {
      const product =Object.assign({}, action.payload);
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === product.id ? product : item
        ),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_PRODUCT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_PRODUCT_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        products: state.products.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_PRODUCT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_PRODUCT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default productReducer;
