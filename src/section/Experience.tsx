import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import CardItem from "../CardItem";

export default function Experience() {
  const experience = [
    {
      title: "SAP",
      description: "Concur iXp Intern",
      date: "September 2021 - Now",
    },
    {
      title: "NETINT Technologies Inc.",
      description: "Co-op Firmware Engineer",
      date: "January 2020 (8 months)",
    },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        {experience.map((item) => (
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
