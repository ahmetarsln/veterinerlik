import { combineReducers } from "redux";
import userReducer from "./userReducer";
import roleReducer from "./roleReducer";
import securityReducer from "./securityReducer";
import modalReducer from "./modalReducer";
import customerReducer from "./customerReducer";

const rootReducer = combineReducers({
    userReducer,
    roleReducer,
    securityReducer,
    modalReducer,
    customerReducer,

  });
  
  export default rootReducer;
  