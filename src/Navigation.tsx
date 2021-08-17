import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { isOptionalChain } from "typescript";

export default function Navigation({ options }) {
  return (
    <Navbar bg="dark" variant="dark" className="" fixed="top">
      <Container>
        <Navbar.Brand href={"#Home"}>Kyle Saburao</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {options
              .filter((x) => x !== "Home")
              .map((option: string) => {
                return (
                  <Nav.Link key={option} href={`#${option}`}>
                    {option}
                  </Nav.Link>
                );
              })}
          </Nav>
          <Nav>
            <Nav.Link>SITE WIP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
