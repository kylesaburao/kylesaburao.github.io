import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardItem from "../CardItem";
import chip8 from "../img/chip8.png";
import connect4fast from "../img/connect4fast.png";
import connect4web from "../img/connect4web.png";
import covidtracker from "../img/covidtracker.png";
import norad from "../img/norad.png";
import pathfinder from "../img/pathfinder.png";
import chunkArrayInGroups from "../manip/arrayChunker";

function Project(name, description, image, link) {
  return { name, description, image, link };
}

export default function Projects() {
  const projects = [
    Project(
      "Canada COVID Tracker",
      "A COVID-19 Tracker for Canadian Provinces",
      covidtracker,
      "https://github.com/kylesaburao/covid-tracker"
    ),
    Project(
      "connect4web",
      "You vs. a Pure Monte Carlo Simulation AI",
      connect4web,
      "https://kylesaburao.me/connect4web/"
    ),
    Project(
      "NORAD Intel",
      "Effective solution to communicate events and expect rapid acknowledgement",
      norad,
      "https://devpost.com/software/norad-intel"
    ),
    Project(
      "connect4fast",
      "You vs. a C++ Pure Monte Carlo Simulation AI",
      connect4fast,
      "https://github.com/kylesaburao/connect4"
    ),
    Project(
      "CHIP-8",
      "Online CHIP-8 emulator",
      chip8,
      "https://chip.netlify.app/emulator/"
    ),
    Project(
      "Pathfinding Turtle",
      "Let a turtle figure out approximate solutions to the travelling salesman problem",
      pathfinder,
      "https://github.com/kylesaburao/PathfindingTurtle"
    ),
  ];

  const maxRowCount = 3;

  return (
    <Container>
      {chunkArrayInGroups(projects, maxRowCount).map((row, i) => {
        return (
          <Row key={i} className="justify-content-center">
            {row.map((project) => {
              return (
                <Col
                  key={project.name}
                  className="text-center d-flex justify-content-around mb-4"
                >
                  <CardItem
                    title={project.name}
                    description={""}
                    body={
                      <Container style={{ height: "100%" }}>
                        <Row>
                          <Col>
                            <p>{project.description}</p>
                          </Col>
                        </Row>
                        <Row className="align-self-bottom">
                          <Button
                            style={{ width: "100%" }}
                            variant="dark"
                            href={project.link}
                          >
                            Visit
                          </Button>
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
    </Container>
  );
}
