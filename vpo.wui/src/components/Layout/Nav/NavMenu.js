import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NavMenu = () => {
  const history = useHistory();
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container className="container-fluid">
          <Navbar.Brand href="/">VPO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/users-list">Kullanıcılar</Nav.Link>
            <Nav.Link href="/roles-list">Roller</Nav.Link>
            


            <Nav.Link
              href="/login"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                history.push("/login");
              }}
            >
              Çıkış
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMenu;