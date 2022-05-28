import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
import { changePetAnalysis, fetchPetAnalysiss } from "../../store/actions/petAnalysisActions";
import { openModal } from "../../store/actions/modalActions";

const PetAnalysisList = () => {
  const dispatch = useDispatch();
  const petAnalysiss = useSelector((state) => state.petAnalysisReducer.petAnalysiss);

  const openPetAnalysisNewModal = () => {
    dispatch(
      openModal({
        modalType: "PetAnalysisNewModal",
        modalProps: { title: "Yeni Tahlil" },
      })
    );
  };

  const openPetAnalysisEditModal = (e) => {
    dispatch(changePetAnalysis(e));
    dispatch(
      openModal({
        modalType: "PetAnalysisEditModal",
        modalProps: { title: "Tahlil Düzenle" },
      })
    );
  };

  useEffect(() => {
    return (
      dispatch(fetchPetAnalysiss()));
  }, []);

  return (
    <div className="site-layout-content">
      <div>
        <Button variant="outline-primary" onClick={() => openPetAnalysisNewModal()}>
          Yeni Tahlil Ekle
        </Button>
      </div>

      <ListGroup variant="flush">
        {petAnalysiss.map((item) => (
          <ListGroup.Item key={item.id}>
            <Container>
              <Row xs="auto">
                <Col>
                  <Person color="cornflowerblue" size={50} />
                </Col>
                <Col>
                  <p>
                    {item.id} - {item.petAnalysisName}
                  </p>

                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => openPetAnalysisEditModal(item)}
                  >
                    Düzenle
                  </Button>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default PetAnalysisList;