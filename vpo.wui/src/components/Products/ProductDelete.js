import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../store/actions/productActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const ProductDelete = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.currentProduct);

  const RemoveProduct = (e) => {
    dispatch(deleteProduct(e));
    dispatch(closeModal());
  };
  const CloseProduct = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{product.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseProduct()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveProduct(product.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProductDelete;
