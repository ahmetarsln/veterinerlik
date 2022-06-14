import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTaxRate, fetchTaxRates } from "../../store/actions/taxRateActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const TaxRateList = () => {
  const dispatch = useDispatch();
  const taxRates = useSelector((state) => state.taxRateReducer.taxRates);

  const selectTaxRate = (taxRate) => {
    dispatch(changeTaxRate(taxRate));
  };

  const openTaxRateNewModal = () => {
    dispatch(
      openModal({
        modalType: "TaxRateNewModal",
        modalProps: { title: "Yeni Firma" },
      })
    );
  };
  const openTaxRateEditModal = (e) => {
    dispatch(changeTaxRate(e));
    dispatch(
      openModal({
        modalType: "TaxRateEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openTaxRateDeleteModal = (e) => {
    dispatch(changeTaxRate(e));
    dispatch(
      openModal({
        modalType: "TaxRateDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchTaxRates());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button
            variant="outline-primary"
            onClick={() => openTaxRateNewModal()}
          >
            Yeni Tedarikçi Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {taxRates.map((item) => (
            <ListGroup.Item key={item.id}>
              <Container>
                <Row xs="auto">
                  <Col>
                    <Person color="cornflowerblue" size={50} />
                  </Col>
                  <Col>
                    <p>
                      {item.id} - {item.taxRateName}
                    </p>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => openTaxRateEditModal(item)}
                    >
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => openTaxRateDeleteModal(item)}
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
export default TaxRateList;