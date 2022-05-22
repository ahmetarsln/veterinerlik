import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProduct, fetchProducts } from "../../store/actions/productActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  const selectProduct = (product) => {
    dispatch(changeProduct(product));
  };

  const openProductNewModal = () => {
    dispatch(
      openModal({
        modalType: "ProductNewModal",
        modalProps: { title: "Yeni Ürün" },
      })
    );
  };
  const openProductEditModal = (e) => {
    dispatch(changeProduct(e));
    dispatch(
      openModal({
        modalType: "ProductEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openProductDeleteModal = (e) => {
    dispatch(changeProduct(e));
    dispatch(
      openModal({
        modalType: "ProductDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button
            variant="outline-primary"
            onClick={() => openProductNewModal()}
          >
            Yeni Ürün Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {products.map((item) => (
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
                      onClick={() => openProductEditModal(item)}
                    >
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => openProductDeleteModal(item)}
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
export default ProductList;
