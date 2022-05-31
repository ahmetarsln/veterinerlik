import React from "react";
import { useSelector } from "react-redux";
import UserNewModal from "../components/Users/UserModals/UserNewModal";
import UserEditModal from "../components/Users/UserModals/UserEditModal";
import RoleNewModal from "../components/Roles/RoleModals/RoleNewModal";
import RoleEditModal from "../components/Roles/RoleModals/RoleEditModal";
import RoleDeleteModal from "../components/Roles/RoleModals/RoleDeleteModal";
import CustomerNewModal from "../components/Customers/CustomerModals/CustomerNewModal";
import CustomerEditModal from "../components/Customers/CustomerModals/CustomerEditModal";
import CustomerDeleteModal from "../components/Customers/CustomerModals/CustomerDeleteModal";
import SupplierNewModal from "../components/Suppliers/SupplierModals/SupplierNewModal";
import SupplierEditModal from "../components/Suppliers/SupplierModals/SupplierEditModal";
import SupplierDeleteModal from "../components/Suppliers/SupplierModals/SupplierDeleteModal";
import PaymentNewModal from "../components/Payments/PaymentModals/PaymentNewModal";
import PaymentEditModal from "../components/Payments/PaymentModals/PaymentEditModal";
import PaymentDeleteModal from "../components/Payments/PaymentModals/PaymentDeleteModal";
import ParameterNewModal from "../components/Parameters/ParameterModals/ParameterNewModal";
import ParameterEditModal from "../components/Parameters/ParameterModals/ParameterEditModal";
import ParameterDeleteModal from "../components/Parameters/ParameterModals/ParameterDeleteModal";

const ModalManager = () => {
  const modalLookup = {
    UserNewModal,
    UserEditModal,
    RoleNewModal,
    RoleEditModal,
    RoleDeleteModal,
    CustomerNewModal,
    CustomerEditModal,
    CustomerDeleteModal,
    SupplierNewModal,
    SupplierEditModal,
    SupplierDeleteModal,
    PaymentNewModal,
    PaymentEditModal,
    PaymentDeleteModal,
    ParameterNewModal,
    ParameterEditModal,
    ParameterDeleteModal,
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
