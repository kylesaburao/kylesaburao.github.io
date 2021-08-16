import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import CardItem from "../CardItem";
import sfuImage from "../img/sfu.jpg";

export default function Education() {
  return (
    <>
      <Row>
        <h3 id="education">Education</h3>
      </Row>
      <Row className="mt-3">
        <Container>
          <Row>
            <Col md="auto">
              <CardItem
                title="Simon Fraser University"
                description="B.Sc. Software Systems, School of Computing Science"
                body={
                  <ul>
                    <li>3.92/4.33 CGPA</li>
                  </ul>
                }
                image={sfuImage}
                date={"2017 - Present"}
              ></CardItem>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
