import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import android from "../img/icons/android.svg";
import angular from "../img/icons/angular.svg";
import cpp from "../img/icons/c++.svg";
import gcp from "../img/icons/gcp.svg";
import git from "../img/icons/git.svg";
import go from "../img/icons/go.svg";
import python from "../img/icons/python.svg";
import react from "../img/icons/react.svg";
import regex from "../img/icons/regex.svg";
import typescript from "../img/icons/typescript.svg";

export default function Technologies() {
  const images = [
    python,
    react,
    angular,
    typescript,
    cpp,
    regex,
    gcp,
    git,
    go,
    android,
  ];

  return (
    <Container>
      <Row>
        {images.map((image) => (
          <Col key={image}>
            <img height="50px" className="mb-4" src={image} alt={image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
