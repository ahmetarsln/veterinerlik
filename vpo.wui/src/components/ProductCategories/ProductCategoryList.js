import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProductCategory, fetchProductCategories } from "../../store/actions/productCategoryActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const ProductCategoryList = () => {
  const dispatch = useDispatch();
  const productCategories = useSelector((state) => state.productCategoryReducer.productCategories);

  const selectProductCategory = (productCategory) => {
    dispatch(changeProductCategory(productCategory));
  };

  const openProductCategoryNewModal = () => {
    dispatch(
      openModal({
        modalType: "ProductCategoryNewModal",
        modalProps: { title: "Yeni Ürün Kategorisi" },
      })
    );
  };
  const openProductCategoryEditModal = (e) => {
    dispatch(changeProductCategory(e));
    dispatch(
      openModal({
        modalType: "ProductCategoryEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openProductCategoryDeleteModal = (e) => {
    dispatch(changeProductCategory(e));
    dispatch(
      openModal({
        modalType: "ProductCategoryDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchProductCategories());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button
            variant="outline-primary"
            onClick={() => openProductCategoryNewModal()}
          >
            Yeni Ürün Kategorisi Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {productCategories.map((item) => (
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
                      onClick={() => openProductCategoryEditModal(item)}
                    >
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => openProductCategoryDeleteModal(item)}
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
export default ProductCategoryList;
