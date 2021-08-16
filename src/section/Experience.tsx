import React from "react";
import { Col, Row } from "react-bootstrap";

import CardItem from "../CardItem";

export default function Experience() {
  return (
    <>
      <Row>
        <Col md="6">
          <Row>
            <h3 id="experience">Experience</h3>
          </Row>
          <Row className="mt-3">
            <Col md="6">
              <Col md="auto">
                <CardItem
                  title={"NETINT Technologies Inc."}
                  description={"Co-op Firmware Engineer"}
                  date={"2020"}
                  body={<ul></ul>}
                />
              </Col>
              <Col md="6">
                <CardItem
                  title={"SAP"}
                  description={"iXp Intern - Concur"}
                  date={"Starting September 2021"}
                  body={<ul></ul>}
                />
              </Col>
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <Row>
            <h3>Skills</h3>
          </Row>
          <Row></Row>
        </Col>
      </Row>
    </>
  );
}
