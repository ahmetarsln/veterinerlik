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
            <Nav.Link href="/pets-list">Evcil Hayvanlar</Nav.Link>
            <Nav.Link href="/products-list">Ürünler</Nav.Link>
            <Nav.Link href="/customers-list">Müşteriler</Nav.Link>
            <Nav.Link href="/suppliers-list">Firmalar</Nav.Link>
            <Nav.Link href="/productCategories-list">Ürün Kategorileri</Nav.Link>
            <Nav.Link href="/currencyUnits-list">Para Birimleri</Nav.Link>
            <Nav.Link href="/payments-list">Ödemeler</Nav.Link>
            <Nav.Link href="/measurementUnits-list">Ölçü Birimleri</Nav.Link>
            <Nav.Link href="/pet-analysis-list">Pet Tahlil</Nav.Link>
            <Nav.Link href="/parameters-list">Parametreler</Nav.Link>
            <Nav.Link href="/clinicalInformations-list">Klinik Bilgileri</Nav.Link>
            <Nav.Link href="/putatives-list">Varsayılan</Nav.Link>


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
