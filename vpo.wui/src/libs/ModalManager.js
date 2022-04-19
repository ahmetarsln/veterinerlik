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
    ProductDeleteModal
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
