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
