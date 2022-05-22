import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePet, fetchPets } from "../../store/actions/petActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const PetList = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.petReducer.pets);

  const selectPet = (pet) => {
    dispatch(changePet(pet));
  };

  const openPetNewModal = () => {
    dispatch(
      openModal({
        modalType: "PetNewModal",
        modalProps: { title: "Yeni Evcil Hayvan" },
      })
    );
  };
  const openPetEditModal = (e) => {
    dispatch(changePet(e));
    dispatch(
      openModal({
        modalType: "PetEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openPetDeleteModal = (e) => {
    dispatch(changePet(e));
    dispatch(
      openModal({
        modalType: "PetDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchPets());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button
            variant="outline-primary"
            onClick={() => openPetNewModal()}
          >
            Yeni Evcil Hayvan Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {pets.map((item) => (
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
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => openPetEditModal(item)}
                    >
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => openPetDeleteModal(item)}
                    >
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
export default PetList;
