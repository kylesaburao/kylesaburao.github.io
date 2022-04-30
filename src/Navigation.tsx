import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import githubIcon from "./img/icons/github.png";

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
          <Nav>
            <Nav.Link href="https://github.com/kylesaburao">
              <img src={githubIcon} width="25px" alt="GitHub" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
