import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSupplier, fetchSuppliers } from "../../store/actions/supplierActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const SupplierList = () => {
  const dispatch = useDispatch();
  const suppliers = useSelector((state) => state.supplierReducer.suppliers);

  const selectSupplier = (supplier) => {
    dispatch(changeSupplier(supplier));
  };

  const openSupplierNewModal = () => {
    dispatch(
      openModal({
        modalType: "SupplierNewModal",
        modalProps: { title: "Yeni Firma" },
      })
    );
  };
  const openSupplierEditModal = (e) => {
    dispatch(changeSupplier(e));
    dispatch(
      openModal({
        modalType: "SupplierEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openSupplierDeleteModal = (e) => {
    dispatch(changeSupplier(e));
    dispatch(
      openModal({
        modalType: "SupplierDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchSuppliers());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button
            variant="outline-primary"
            onClick={() => openSupplierNewModal()}
          >
            Yeni Evcil Hayvan Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {suppliers.map((item) => (
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
                      onClick={() => openSupplierEditModal(item)}
                    >
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => openSupplierDeleteModal(item)}
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
export default SupplierList;