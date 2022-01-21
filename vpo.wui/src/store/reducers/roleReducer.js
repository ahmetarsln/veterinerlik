import * as actionTypes from "../actions/actionTypes";

const initialState = {
  roles: [],
  role: {},
  loading: false,
  errors: {},
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ROLE:
      return { ...state, currentRole: action.payload };
    case actionTypes.FETCH_ROLES_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_ROLES_SUCCESS:
      return { ...state, roles: action.payload };
    case actionTypes.FETCH_ROLES_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_ROLE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_ROLE_SUCCESS:
      return { ...state, role: action.payload };
    case actionTypes.FETCH_ROLE_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_ROLE:
      return { ...state, role: {} };
    case actionTypes.SAVE_ROLE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_ROLE_SUCCESS:
      return {
        ...state,
        roles: [...state.roles, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_ROLE_FAILED:
      return { ...state, errors: action.payload.data, loading: false };
    case actionTypes.UPDATE_ROLE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_ROLE_SUCCESS: {
      const role =Object.assign({}, action.payload);
      return {
        ...state,
        roles: state.roles.map((item) =>
          item.id === role.id ? role : item
        ),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_ROLE_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_ROLE_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        roles: state.roles.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_ROLE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_ROLE_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default roleReducer;