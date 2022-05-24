import { combineReducers } from "redux";
import userReducer from "./userReducer";
import roleReducer from "./roleReducer";
import securityReducer from "./securityReducer";
import modalReducer from "./modalReducer";
import appointmentReducer from "./appointmentReducer";
import petReducer from "./petReducer";
import productReducer from "./productReducer";
import customerReducer from "./customerReducer";
import supplierReducer from "./supplierReducer";
import productCategoryReducer from "./productCategoryReducer";
import currencyUnitReducer from "./currencyUnitReducer";
import paymentReducer from "./paymentReducer";

const rootReducer = combineReducers({
    userReducer,
    roleReducer,
    securityReducer,
    modalReducer,
    appointmentReducer,
    petReducer,
    productReducer,
    customerReducer,
    supplierReducer,
    productCategoryReducer,
    productCategoryReducer,
    currencyUnitReducer,
    paymentReducer,
  });
  
  export default rootReducer;
