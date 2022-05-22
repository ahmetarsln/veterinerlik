import * as actionTypes from "../actions/actionTypes";

const initialState = {
  productCategories: [],
  productCategory: {},
  loading: false,
  errors: {},
};

const productCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PRODUCTCATEGORY:
      return { ...state, currentProductCategory: action.payload };
    case actionTypes.FETCH_PRODUCTCATEGORIES_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_PRODUCTCATEGORIES_SUCCESS:
      return { ...state, productCategories: action.payload };
    case actionTypes.FETCH_PRODUCTCATEGORIES_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_PRODUCTCATEGORY_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_PRODUCTCATEGORY_SUCCESS:
      return { ...state, productCategory: action.payload };
    case actionTypes.FETCH_PRODUCTCATEGORY_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_PRODUCTCATEGORY:
      return { ...state, productCategory: {} };
    case actionTypes.SAVE_PRODUCTCATEGORY_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_PRODUCTCATEGORY_SUCCESS:
      return {
        ...state,
        productCategories: [...state.productCategories, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_PRODUCTCATEGORY_FAILED:
      return { ...state, errors: action.payload, loading: false };
    case actionTypes.UPDATE_PRODUCTCATEGORY_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_PRODUCTCATEGORY_SUCCESS: {
      const productCategory =Object.assign({}, action.payload);
      return {
        ...state,
        productCategories: state.productCategories.map((item) =>
          item.id === productCategory.id ? productCategory : item
        ),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_PRODUCTCATEGORY_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_PRODUCTCATEGORY_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        productCategories: state.productCategories.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_PRODUCTCATEGORY_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_PRODUCTCATEGORY_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default productCategoryReducer;
