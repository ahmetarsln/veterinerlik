import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSupplier } from "../../store/actions/supplierActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const SupplierDelete = () => {
  const dispatch = useDispatch();
  const supplier = useSelector((state) => state.supplierReducer.currentSupplier);

  const RemoveSupplier = (e) => {
    dispatch(deleteSupplier(e));
    dispatch(closeModal());
  };
  const CloseSupplier = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{supplier.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseSupplier()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveSupplier(supplier.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SupplierDelete;