import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="">
      <Container>
        <Navbar.Brand>Kyle Saburao</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
