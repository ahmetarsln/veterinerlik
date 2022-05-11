import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductCategory } from "../../store/actions/productCategoryActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const ProductCategoryDelete = () => {
  const dispatch = useDispatch();
  const productCategory = useSelector((state) => state.productCategoryReducer.currentProductCategory);

  const RemoveProductCategory = (e) => {
    dispatch(deleteProductCategory(e));
    dispatch(closeModal());
  };
  const CloseProductCategory = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{productCategory.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseProductCategory()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveProductCategory(productCategory.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProductCategoryDelete;
