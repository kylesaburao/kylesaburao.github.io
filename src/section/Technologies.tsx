import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import android from "../img/icons/android.svg";
import angular from "../img/icons/angular.svg";
import cpp from "../img/icons/c++.svg";
import docker from "../img/icons/docker.png";
import gcp from "../img/icons/gcp.svg";
import git from "../img/icons/git.svg";
import go from "../img/icons/go.svg";
import javascript from "../img/icons/javascript.png";
import python from "../img/icons/python.svg";
import react from "../img/icons/react.svg";
import regex from "../img/icons/regex.svg";
import typescript from "../img/icons/typescript.svg";
import wireguard from "../img/icons/wireguard.svg";
import chunkArrayInGroups from "../manip/arrayChunker";

export default function Technologies() {
  const images = chunkArrayInGroups(
    [
      react,
      angular,
      typescript,
      javascript,
      python,
      cpp,
      go,
      regex,
      docker,
      wireguard,
      gcp,
      git,
      android,
    ],
    8
  );

  return (
    <Container>
      {images.map((row, i) => {
        return (
          <Row key={i} className="justify-content-center">
            {row.map((image) => (
              <Col
                key={image}
                className="text-center d-flex justify-content-around mb-4"
              >
                <img height="60px" className="mb-4" src={image} alt={image} />
              </Col>
            ))}{" "}
          </Row>
        );
      })}
    </Container>
  );
}
