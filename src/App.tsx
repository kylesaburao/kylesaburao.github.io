import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./Navigation";
import portrait from "./img/me.jpg";

function App() {
  return (
    <>
      <Navigation />

      <Container id="content">
        <Row
          className="justify-content-md-center align-items-center"
          id="about"
        >
          <Col md="auto">
            <img src={portrait} alt="Portrait" className="portrait" />
          </Col>
          <Col md="5">
            <div>
              <h1 id="title">Kyle Saburao</h1>
              <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                Student at Simon Fraser University. Years of experience
                developing software and over a decade working with hardware.
                ...
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <h3 id="experience">Experience</h3>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
        </Row>
        <Row>
          <h3 id="projects">Projects</h3>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
        </Row>
        <Row>
          <h3 id="education">Education</h3>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
        </Row>
      </Container>
    </>
  );
}

export default App;
