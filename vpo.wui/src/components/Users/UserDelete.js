import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../store/actions/userActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const UserDelete = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.currentUser);

  const RemoveUser = (e) => {
    dispatch(deleteUser(e));
    dispatch(closeModal());
  };
  const CloseUser = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{user.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseUser()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveUser(user.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UserDelete;