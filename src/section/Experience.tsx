import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import CardItem from "../CardItem";

interface WorkExperience {
  title: string;
  description: string;
  date: string;
}

function MakeWorkExperience(
  title: string,
  description: string,
  date: string
): WorkExperience {
  return { title, description, date };
}

export default function Experience() {
  const experiences: WorkExperience[] = [
    MakeWorkExperience(
      "SAP",
      "iXp Intern - Concur Travel Software Engineer",
      "September 2021 - Now"
    ),
    MakeWorkExperience(
      "NETINT Technologies Inc.",
      "Co-op Firmware Engineer",
      "January 2020 (8 months)"
    ),
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        {experiences.map((item) => (
          <Col key={item.title} className="d-flex justify-content-around">
            <CardItem
              title={item.title}
              description={item.description}
              date={item.date}
            ></CardItem>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
