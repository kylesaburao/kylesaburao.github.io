import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardItem from "../CardItem";
import chip8 from "../img/chip8.png";
import connect4fast from "../img/connect4fast.png";
import connect4web from "../img/connect4web.png";
import covidtracker from "../img/covidtracker.png";
import frc from "../img/frc.jpg";
import tracker from "../img/tracker.png";

function Project(name, description, image, link = "") {
  return { name, description, image, link };
}

export default function Projects() {
  const projects = [
    Project(
      "Canada COVID Tracker",
      "COVID-19 Tracker for Canadian Provinces",
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
      "COVID Report",
      "User-uploaded report tracking and management for local COVID data",
      tracker
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
      "FRC Loader",
      "150 lbs heavy-duty autonomous ball transporter",
      frc,
      "http://lamrobotics.weebly.com/2017-event-info.html"
    ),
  ];

  const createProjectBody = (project) => {
    return (
      <div className="h-100 d-flex flex-column justify-content-between">
        <p>{project.description}</p>
        {project.link && (
          <Button variant="dark" href={project.link}>
            Visit
          </Button>
        )}
      </div>
    );
  };

  return (
    <Container>
      <Row className="justify-content-center">
        {projects.map((project) => {
          return (
            <Col
              key={project.name}
              className="text-center d-flex justify-content-around mb-4"
            >
              <CardItem
                title={project.name}
                description={""}
                body={createProjectBody(project)}
                image={project.image}
                imageLink={project.link}
                width="20em"
                height="100%"
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
