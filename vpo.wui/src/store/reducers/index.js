import { combineReducers } from "redux";
import userReducer from "./userReducer";
import roleReducer from "./roleReducer";
import securityReducer from "./securityReducer";
import modalReducer from "./modalReducer";
import petReducer from "./petReducer";
import productReducer from "./productReducer";
import productCategoryReducer from "./productCategoryReducer";
import currencyUnitReducer from "./currencyUnitReducer";

const rootReducer = combineReducers({
    userReducer,
    roleReducer,
    securityReducer,
    modalReducer,
    petReducer,
    productReducer,
    productCategoryReducer,
    currencyUnitReducer
    
  });
  
  export default rootReducer;
  