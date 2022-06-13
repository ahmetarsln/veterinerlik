import { combineReducers } from "redux";
import userReducer from "./userReducer";
import roleReducer from "./roleReducer";
import securityReducer from "./securityReducer";
import modalReducer from "./modalReducer";
import customerReducer from "./customerReducer";
import supplierReducer from "./supplierReducer";
import paymentReducer from "./paymentReducer";
import parameterReducer from "./parameterReducer";
import putativeReducer from "./putativeReducer";

const rootReducer = combineReducers({
  userReducer,
  roleReducer,
  securityReducer,
  modalReducer,
  customerReducer,
  supplierReducer,
  paymentReducer,
  parameterReducer,
  putativeReducer

});

export default rootReducer;
