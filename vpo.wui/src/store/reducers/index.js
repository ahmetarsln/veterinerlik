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
import petAnalysisReducer from "./petAnalysisReducer";
import parameterReducer from "./parameterReducer";
import measurementUnitReducer from "./measurementUnitReducer";
import putativeReducer from "./putativeReducer";
import clinicalInformationReducer from "./clinicalInformationReducer";
import invoiceReducer from "./invoiceReducer";
import taxRateReducer from "./taxRateReducer";
import analysisReducer from "./analysisReducer";

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
  petAnalysisReducer,
  parameterReducer,
  measurementUnitReducer,
  putativeReducer,
  clinicalInformationReducer,
  invoiceReducer,
  taxRateReducer,
  analysisReducer,

});

export default rootReducer;
