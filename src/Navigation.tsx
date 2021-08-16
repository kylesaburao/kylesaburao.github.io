import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Navigation({ options, setCurrent }) {
  return (
    <Navbar bg="dark" variant="dark" className="">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {options.map((option: string) => {
              return (
                <Nav.Link
                  key={option}
                  onClick={() => {
                    setCurrent(option);
                  }}
                >
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
