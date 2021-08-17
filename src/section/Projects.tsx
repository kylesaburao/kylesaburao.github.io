import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import connect4web from "../img/connect4web.png";
import covidtracker from "../img/covidtracker.png";
import chip8 from "../img/chip8.png";

import CardItem from "../CardItem";

function chunkArrayInGroups(arr: any[], size: number) {
  var myArray: any[] = [];
  for (var i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
}

function Project(name, description, image, link) {
  return { name, description, image, link };
}

export default function Projects() {
  const projects = [
    Project(
      "connect4web",
      "Connect Four vs. a Pure Monte Carlo Simulation AI",
      connect4web,
      "https://kylesaburao.me/connect4web/"
    ),
    Project(
      "Canada COVID Tracker",
      "A COVID-19 Tracker for Canadian Provinces",
      covidtracker,
      "https://github.com/kylesaburao/covid-tracker"
    ),
    Project(
      "CHIP-8",
      "Online CHIP-8 emulator",
      chip8,
      "https://chip.netlify.app/emulator/"
    ),
  ];

  const maxRowCount = 3;

  return (
    <>
      {chunkArrayInGroups(projects, maxRowCount).map((row, i) => {
        return (
          <Row key={i}>
            {row.map((project) => {
              return (
                <Col key={project.name}>
                  <CardItem
                    title={project.name}
                    description={""}
                    body={
                      <Container style={{ height: "100%" }}>
                        <Row className="align-items-end">
                          <Col className="align-self-end">
                            <p>{project.description}</p>
                            <Button
                              style={{ width: "100%" }}
                              variant="dark"
                              href={project.link}
                            >
                              Visit
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    }
                    image={project.image}
                    imageLink={project.link}
                    width="20em"
                    height="100%"
                  />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </>
  );
}
