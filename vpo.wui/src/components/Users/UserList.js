import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
import { changeUser, fetchUsers } from "../../store/actions/userActions";
import { openModal } from "../../store/actions/modalActions";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const openUserNewModal = () => {
    dispatch(
      openModal({
        modalType: "UserNewModal",
        modalProps: { title: "Yeni Kullanıcı" },
      })
    );
  };

  const openUserEditModal = (e) => {
    dispatch(changeUser(e));
    dispatch(
      openModal({
        modalType: "UserEditModal",
        modalProps: { title: "Kullanıcı Düzenle" },
      })
    );
  };

  useEffect(() => {
    return(
    dispatch(fetchUsers()));
  }, []);

  return (
    <div className="site-layout-content">
      <div>
        <Button variant="outline-primary" onClick={() => openUserNewModal()}>
          Yeni Kullanıcı Ekle
        </Button>
      </div>

      <ListGroup variant="flush">
        {users.map((item) => (
          <ListGroup.Item key={item.id}>
            <Container>
              <Row xs="auto">
                <Col>
                  <Person color="cornflowerblue" size={50} />
                </Col>
                <Col>
                  <p>
                    {item.id} - {item.userName}
                  </p>

                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => openUserEditModal(item)}
                  >
                    Düzenle
                  </Button>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;