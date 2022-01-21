import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRole, fetchRoles } from "../../store/actions/roleActions";
import { openModal } from "../../store/actions/modalActions";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";

const RoleList = () => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.roleReducer.roles);

  const selectRole = (role) => {
    dispatch(changeRole(role));
  };

  const openRoleNewModal = () => {
    dispatch(
      openModal({
        modalType: "RoleNewModal",
        modalProps: { title: "Yeni Rol" },
      })
    );
  };
  const openRoleEditModal = (e) => {
    dispatch(changeRole(e));
    dispatch(
      openModal({
        modalType: "RoleEditModal",
        modalProps: { title: "Rolü Düzenle" },
      })
    );
  };
  const openRoleDeleteModal = (e) => {
    dispatch(changeRole(e));
    dispatch(
      openModal({
        modalType: "RoleDeleteModal",
        modalProps: { title: "Rolü Sil" },
      })
    );
  };
  
  useEffect(() => {
    return(
    dispatch(fetchRoles()));
  }, []);

  return (
    <div>
      <div className="site-layout-content">
        <div>
          <Button variant="outline-primary" onClick={() => openRoleNewModal()}>
            Yeni Rol Ekle
          </Button>
        </div>

        <ListGroup variant="flush">
          {roles.map((item) => (
            <ListGroup.Item key={item.id}>
              <Container>
                <Row xs="auto">
                  <Col>
                    <Person color="cornflowerblue" size={50} />
                  </Col>
                  <Col>
                    <p>
                      {item.id} - {item.name}
                    </p>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => openRoleEditModal(item)}
                    >
                      D端zenle
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => openRoleDeleteModal(item)}
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
export default RoleList;