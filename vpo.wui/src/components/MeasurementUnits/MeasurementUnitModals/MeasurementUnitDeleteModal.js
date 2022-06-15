import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import MeasurementUnitDelete from "../MeasurementUnitDelete";

const MeasurementUnitDeleteModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <MeasurementUnitDelete />
      </ModalWrapper>
    </div>
  );
};
export default MeasurementUnitDeleteModal;
