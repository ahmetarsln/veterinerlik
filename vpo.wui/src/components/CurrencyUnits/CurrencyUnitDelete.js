import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCurrencyUnit } from "../../store/actions/currencyUnitActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const CurrencyUnitDelete = () => {
  const dispatch = useDispatch();
  const currencyUnit = useSelector((state) => state.currencyUnitReducer.currentCurrencyUnit);

  const RemoveCurrencyUnit = (e) => {
    dispatch(deleteCurrencyUnit(e));
    dispatch(closeModal());
  };
  const CloseCurrencyUnit = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{currencyUnit.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseCurrencyUnit()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveCurrencyUnit(currencyUnit.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CurrencyUnitDelete;
