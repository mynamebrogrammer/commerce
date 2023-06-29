import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

export default function HeadNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home"></Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          <NavDropdown
            className="alcohol"
            title="Click here for Alcohol options"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Beer</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Wine</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Liquor</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="tobacco"
            title="Click here for Tobacco options"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Cigarrettes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Cigars/Cigarillos
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Hookah Tobacco
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="alcohol"
            title="Click here for Snack/Food options"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Chips</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Sodas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Other Foods</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
