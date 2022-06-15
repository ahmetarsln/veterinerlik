import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeClinicalInformation, fetchClinicalInformations } from "../../store/actions/clinicalInformationActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const ClinicalInformationList = () => {
  const dispatch = useDispatch();
  const clinicalInformations = useSelector((state) => state.clinicalInformationReducer.clinicalInformations);

  const selectClinicalInformation = (clinicalInformation) => {
    dispatch(changeClinicalInformation(clinicalInformation));
  };

  const openClinicalInformationNewModal = () => {
    dispatch(
      openModal({
        modalType: "ClinicalInformationNewModal",
        modalProps: { title: "Yeni Klinik" },
      })
    );
  };
  const openClinicalInformationEditModal = (e) => {
    dispatch(changeClinicalInformation(e));
    dispatch(
      openModal({
        modalType: "ClinicalInformationEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openClinicalInformationDeleteModal = (e) => {
    dispatch(changeClinicalInformation(e));
    dispatch(
      openModal({
        modalType: "ClinicalInformationDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchClinicalInformations());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button variant="outline-primary" onClick={() => openClinicalInformationNewModal()}>
            Yeni Klinik Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {clinicalInformations.map((item) => (
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
                    <Button size="sm" variant="primary" onClick={() => openClinicalInformationEditModal(item)}>
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button size="sm" variant="danger" onClick={() => openClinicalInformationDeleteModal(item)}>
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
export default ClinicalInformationList;
