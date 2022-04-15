import { combineReducers } from "redux";
import userReducer from "./userReducer";
import roleReducer from "./roleReducer";
import securityReducer from "./securityReducer";
import modalReducer from "./modalReducer";
import petReducer from "./petReducer";

const rootReducer = combineReducers({
    userReducer,
    roleReducer,
    securityReducer,
    modalReducer,
    petReducer,
    
  });
  
  export default rootReducer;
  