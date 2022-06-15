import React from "react";
import { useSelector } from "react-redux";
import UserNewModal from "../components/Users/UserModals/UserNewModal";
import UserEditModal from "../components/Users/UserModals/UserEditModal";
import RoleNewModal from "../components/Roles/RoleModals/RoleNewModal";
import RoleEditModal from "../components/Roles/RoleModals/RoleEditModal";
import RoleDeleteModal from "../components/Roles/RoleModals/RoleDeleteModal";
import PetNewModal from "../components/Pets/PetModals/PetNewModal";
import PetEditModal from "../components/Pets/PetModals/PetEditModal";
import PetDeleteModal from "../components/Pets/PetModals/PetDeleteModal";
import ProductNewModal from "../components/Products/ProductModals/ProductNewModal";
import ProductEditModal from "../components/Products/ProductModals/ProductEditModal";
import ProductDeleteModal from "../components/Products/ProductModals/ProductDeleteModal";
import CustomerNewModal from "../components/Customers/CustomerModals/CustomerNewModal";
import CustomerEditModal from "../components/Customers/CustomerModals/CustomerEditModal";
import CustomerDeleteModal from "../components/Customers/CustomerModals/CustomerDeleteModal";
import SupplierNewModal from "../components/Suppliers/SupplierModals/SupplierNewModal";
import SupplierEditModal from "../components/Suppliers/SupplierModals/SupplierEditModal";
import SupplierDeleteModal from "../components/Suppliers/SupplierModals/SupplierDeleteModal";
import ProductCategoryNewModal from "../components/ProductCategories/ProductCategoryModals/ProductCategoryNewModal";
import ProductCategoryEditModal from "../components/ProductCategories/ProductCategoryModals/ProductCategoryEditModal";
import ProductCategoryDeleteModal from "../components/ProductCategories/ProductCategoryModals/ProductCategoryDeleteModal";
import CurrencyUnitNewModal from "../components/CurrencyUnits/CurrencyUnitModals/CurrencyUnitNewModal";
import CurrencyUnitEditModal from "../components/CurrencyUnits/CurrencyUnitModals/CurrencyUnitEditModal";
import CurrencyUnitDeleteModal from "../components/CurrencyUnits/CurrencyUnitModals/CurrencyUnitDeleteModal";
import PaymentNewModal from "../components/Payments/PaymentModals/PaymentNewModal";
import PaymentEditModal from "../components/Payments/PaymentModals/PaymentEditModal";
import PaymentDeleteModal from "../components/Payments/PaymentModals/PaymentDeleteModal";
import MeasurementUnitNewModal from "../components/MeasurementUnits/MeasurementUnitModals/MeasurementUnitNewModal";
import MeasurementUnitEditModal from "../components/MeasurementUnits/MeasurementUnitModals/MeasurementUnitEditModal";
import MeasurementUnitDeleteModal from "../components/MeasurementUnits/MeasurementUnitModals/MeasurementUnitDeleteModal";
import ParameterNewModal from "../components/Parameters/ParameterModals/ParameterNewModal";
import ParameterEditModal from "../components/Parameters/ParameterModals/ParameterEditModal";
import ParameterDeleteModal from "../components/Parameters/ParameterModals/ParameterDeleteModal";
import PutativeNewModal from "../components/Putatives/PutativeModals/PutativeNewModal";
import PutativeEditModal from "../components/Putatives/PutativeModals/PutativeEditModal";
import PutativeDeleteModal from "../components/Putatives/PutativeModals/PutativeDeleteModal";


import ClinicalInformationNewModal from "../components/ClinicalInformations/ClinicalInformationModals/ClinicalInformationNewModal";
import ClinicalInformationEditModal from "../components/ClinicalInformations/ClinicalInformationModals/ClinicalInformationEditModal";
import ClinicalInformationDeleteModal from "../components/ClinicalInformations/ClinicalInformationModals/ClinicalInformationDeleteModal";
import InvoiceNewModal from "../components/Invoices/InvoiceModals/InvoiceNewModal";
import InvoiceEditModal from "../components/Invoices/InvoiceModals/InvoiceEditModal";
import InvoiceDeleteModal from "../components/Invoices/InvoiceModals/InvoiceDeleteModal";
import ReportNewModal from "../components/Reports/ReportModals/ReportNewModal";
import ReportEditModal from "../components/Reports/ReportModals/ReportEditModal";
import ReportDeleteModal from "../components/Reports/ReportModals/ReportDeleteModal";
const ModalManager = () => {
  const modalLookup = {
    UserNewModal,
    UserEditModal,
    RoleNewModal,
    RoleEditModal,
    RoleDeleteModal,
    PetNewModal,
    PetEditModal,
    PetDeleteModal,
    ProductNewModal,
    ProductEditModal,
    ProductDeleteModal,
    CustomerNewModal,
    CustomerEditModal,
    CustomerDeleteModal,
    SupplierNewModal,
    SupplierEditModal,
    SupplierDeleteModal,
    ProductCategoryNewModal,
    ProductCategoryEditModal,
    ProductCategoryDeleteModal,
    CurrencyUnitNewModal,
    CurrencyUnitEditModal,
    CurrencyUnitDeleteModal,
    PaymentNewModal,
    PaymentEditModal,
    PaymentDeleteModal,
    MeasurementUnitNewModal,
    MeasurementUnitEditModal,
    MeasurementUnitDeleteModal,
    ParameterNewModal,
    ParameterEditModal,
    ParameterDeleteModal,
    ClinicalInformationNewModal,
    ClinicalInformationEditModal,
    ClinicalInformationDeleteModal,
    PutativeNewModal,
    PutativeEditModal,
    PutativeDeleteModal,
    InvoiceNewModal,
    InvoiceEditModal,
    InvoiceDeleteModal,
    ReportNewModal,
    ReportEditModal,
    ReportDeleteModal,
  };
  const currentModal = useSelector((state) => state.modalReducer);
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};

export default ModalManager;
