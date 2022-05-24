import React from "react";
import ModalWrapper from "../../../libs/ModalWrapper";
import MeasurementUnitEdit from "../MeasurementUnitEdit";

const MeasurementUnitEditModal = (props) => {
  return (
    <div>
      <ModalWrapper title={props.title}>
        <MeasurementUnitEdit />
      </ModalWrapper>
    </div>
  );
};
export default MeasurementUnitEditModal;
