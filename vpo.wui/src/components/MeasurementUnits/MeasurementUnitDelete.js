import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMeasurementUnit } from "../../store/actions/measurementUnitActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const MeasurementUnitDelete = () => {
  const dispatch = useDispatch();
  const measurementUnit = useSelector((state) => state.measurementUnitReducer.currentMeasurementUnit);

  const RemoveMeasurementUnit = (e) => {
    dispatch(deleteMeasurementUnit(e));
    dispatch(closeModal());
  };
  const CloseMeasurementUnit = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{measurementUnit.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseMeasurementUnit()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveMeasurementUnit(measurementUnit.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MeasurementUnitDelete;
