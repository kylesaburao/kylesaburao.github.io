import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation({ options }) {
  return (
    <Navbar bg="dark" variant="dark" className="" fixed="top" expand="md">
      <Container>
        <Navbar.Brand href={"#Home"}>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {options.map((option: string) => {
              return (
                <Nav.Link key={option} href={`#${option}`}>
                  {option}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
