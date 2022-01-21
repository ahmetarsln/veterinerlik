import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRole } from "../../store/actions/roleActions";
import { closeModal } from "../../store/actions/modalActions";
import { Button, Row, Col, Container } from "react-bootstrap";

const RoleDelete = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.roleReducer.currentRole);

  const RemoveRole = (e) => {
    dispatch(deleteRole(e));
    dispatch(closeModal());
  };
  const CloseRole = (e) => {
    dispatch(closeModal());
  };

  return (
    <>
      <h6>{role.id}. kayıtı silmek istiyor musunuz?</h6>
      <Container>
        <Row xs="auto">
          <Col>
            <Button variant="primary" onClick={() => CloseRole()}>
              Hayır
            </Button>
          </Col>
          <Col>
            {" "}
            <Button variant="danger" onClick={() => RemoveRole(role.id)}>
              Evet
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default RoleDelete;