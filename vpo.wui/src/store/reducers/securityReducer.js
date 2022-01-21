
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  token: "",
  currentUser: {},
  errors:""
  };

const securityReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUESTED:
      return { ...state};
    case actionTypes.LOGIN_SUCCESS:
      return { isAuthenticated:true,currentUser:action.payload.user,token:action.payload.token };
    case actionTypes.LOGIN_FAILED:
      return { ...state, isAuthenticated: false, errors: action.payload };
      case actionTypes.REGISTER_REQUESTED:
        return { ...state, isAuthenticated:false,token:"",user:{}};
      case actionTypes.REGISTER_SUCCESS:
        return { ...state,isAuthenticated:false,token:"",user:{}};
      case actionTypes.REGISTER_FAILED:
        return { ...state, isAuthenticated: false, errors: action.payload };
    case actionTypes.LOGOUT_REQUESTED:
      return { ...state };
    case actionTypes.LOGOUT_SUCCESS:
      return { ...state,isAuthenticated:false,token:"",user:{} };
    case actionTypes.LOGOUT_FAILED:
      return {...state,errors: action.payload};

    default:
      return state;
  }
  };

  export default securityReducer;

/*
  import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}*/