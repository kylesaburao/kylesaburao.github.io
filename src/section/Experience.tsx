import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import CardItem from "../CardItem";

export default function Experience() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="d-flex justify-content-around">
          <CardItem
            title={"NETINT Technologies Inc."}
            description={"Co-op Firmware Engineer"}
            date={"2020"}
            body={<ul></ul>}
          />
        </Col>
        <Col className="d-flex justify-content-around">
          <CardItem
            title={"SAP"}
            description={"iXp Intern - Concur"}
            date={"Starting September 2021"}
            body={<ul></ul>}
          />
        </Col>
      </Row>
    </Container>
  );
}
