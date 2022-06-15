import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrencyUnit, fetchCurrencyUnits } from "../../store/actions/currencyUnitActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const CurrencyUnitList = () => {
  const dispatch = useDispatch();
  const currencyUnits = useSelector((state) => state.currencyUnitReducer.currencyUnits);

  const selectCurrencyUnit = (currencyUnit) => {
    dispatch(changeCurrencyUnit(currencyUnit));
  };

  const openCurrencyUnitNewModal = () => {
    dispatch(
      openModal({
        modalType: "CurrencyUnitNewModal",
        modalProps: { title: "Yeni Para Birimi" },
      })
    );
  };
  const openCurrencyUnitEditModal = (e) => {
    dispatch(changeCurrencyUnit(e));
    dispatch(
      openModal({
        modalType: "CurrencyUnitEditModal",
        modalProps: { title: "Düzenle" },
      })
    );
  };
  const openCurrencyUnitDeleteModal = (e) => {
    dispatch(changeCurrencyUnit(e));
    dispatch(
      openModal({
        modalType: "CurrencyUnitDeleteModal",
        modalProps: { title: "Sil" },
      })
    );
  };

  useEffect(() => {
    return dispatch(fetchCurrencyUnits());
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button
            variant="outline-primary"
            onClick={() => openCurrencyUnitNewModal()}
          >
            Yeni Para Birimi Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {currencyUnits.map((item) => (
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
                      onClick={() => openCurrencyUnitEditModal(item)}
                    >
                      Düzenle
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => openCurrencyUnitDeleteModal(item)}
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
export default CurrencyUnitList;
