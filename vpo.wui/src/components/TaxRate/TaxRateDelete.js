import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaxRate } from "../../store/actions/taxRateActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const TaxRateDelete = () => {
  const dispatch = useDispatch();
  const taxRate = useSelector((state) => state.taxRateReducer.currentTaxRate);

  const RemoveTaxRate = (e) => {
    dispatch(deleteTaxRate(e));
    dispatch(closeModal());
  };
  const CloseTaxRate = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{taxRate.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseTaxRate()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveTaxRate(taxRate.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TaxRateDelete;