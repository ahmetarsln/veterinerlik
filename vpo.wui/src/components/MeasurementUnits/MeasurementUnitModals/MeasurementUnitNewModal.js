import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import MeasurementUnitNew from "../MeasurementUnitNew";

const MeasurementUnitNewModal = (props) => {
  return (
    <ModalWrapper title={props.title}>
      <MeasurementUnitNew />
    </ModalWrapper>
  );
};
export default MeasurementUnitNewModal;
