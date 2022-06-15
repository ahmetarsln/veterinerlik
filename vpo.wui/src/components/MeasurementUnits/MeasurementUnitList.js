import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMeasurementUnit, fetchMeasurementUnits } from "../../store/actions/measurementUnitActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const MeasurementUnitList = () => {
  const dispatch = useDispatch();
  const measurementUnits = useSelector((state) => state.measurementUnitReducer.measurementUnits);

  const selectMeasurementUnit = (measurementUnit) => {
    dispatch(changeMeasurementUnit(measurementUnit));
  };

  const openMeasurementUnitNewModal = () => {
    dispatch(
      openModal({
        modalType: "MeasurementUnitNewModal",
        modalProps: { title: "Yeni Ölçü Birinmi" },
      })
    );
  };
  const openMeasurementUnitEditModal = (e) => {
    dispatch(changeMeasurementUnit(e));
    dispatch(
      openModal({
        modalType: "MeasurementUnitEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openMeasurementUnitDeleteModal = (e) => {
    dispatch(changeMeasurementUnit(e));
    dispatch(
      openModal({
        modalType: "MeasurementUnitDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchMeasurementUnits());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button variant="outline-primary" onClick={() => openMeasurementUnitNewModal()}>
            Yeni Ölçü Birimi Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {measurementUnits.map((item) => (
            <ListGroup.Item key={item.id}>
              <Container>
                <Row xs="auto">
                  <Col>
                    <Person color="cornflowerblue" size={50} />
                  </Col>
                  <Col>
                    <p>
                      {item.id} - {item.nameSurname}
                    </p>
                  </Col>
                  <Col>
                    <Button size="sm" variant="primary" onClick={() => openMeasurementUnitEditModal(item)}>
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button size="sm" variant="danger" onClick={() => openMeasurementUnitDeleteModal(item)}>
                      Sil
                    </Button>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
export default MeasurementUnitList;
