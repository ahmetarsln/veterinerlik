import { combineReducers } from "redux";
import userReducer from "./userReducer";
import roleReducer from "./roleReducer";
import securityReducer from "./securityReducer";
import modalReducer from "./modalReducer";
import appointmentReducer from "./appointmentReducer";
import petReducer from "./petReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    userReducer,
    roleReducer,
    securityReducer,
    modalReducer,
    appointmentReducer,
    petReducer,
    productReducer,
    
  });
  
  export default rootReducer;
  